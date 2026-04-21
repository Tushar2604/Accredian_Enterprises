import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations";
import type { ApiResponse } from "@/lib/types";
import { promises as fs } from "fs";
import path from "path";

interface LeadRecord {
  id: string;
  submittedAt: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  teamSize: string;
  message: string;
  source: string;
}

const LEADS_FILE = path.join(process.cwd(), "leads.json");

async function appendLead(lead: LeadRecord): Promise<void> {
  let existing: LeadRecord[] = [];

  try {
    const content = await fs.readFile(LEADS_FILE, "utf-8");
    existing = JSON.parse(content) as LeadRecord[];
  } catch {
    // File doesn't exist yet — start fresh
  }

  existing.push(lead);
  await fs.writeFile(LEADS_FILE, JSON.stringify(existing, null, 2), "utf-8");
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body: unknown = await request.json();

    const parsed = leadFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.errors[0]?.message ?? "Validation failed",
        },
        { status: 400 }
      );
    }

    const lead: LeadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      submittedAt: new Date().toISOString(),
      fullName: parsed.data.fullName,
      workEmail: parsed.data.workEmail,
      companyName: parsed.data.companyName,
      teamSize: parsed.data.teamSize,
      message: parsed.data.message ?? "",
      source: "enterprise-landing-page",
    };

    // Log to console (always)
    console.log("[LEAD SUBMITTED]", JSON.stringify(lead, null, 2));

    // Persist to JSON file (gracefully fails in read-only environments like Vercel)
    try {
      await appendLead(lead);
      console.log(`[LEAD SAVED] ID: ${lead.id}`);
    } catch (fsError) {
      console.warn("[LEAD PERSIST WARN] Could not write to file:", fsError);
      // Non-fatal — log was already captured above
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Our enterprise team will reach out within 24 hours.",
        id: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[LEAD API ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
