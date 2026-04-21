import { z } from "zod";

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  workEmail: z
    .string()
    .email("Please enter a valid work email")
    .refine(
      (email) => !["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"].some((d) => email.endsWith(`@${d}`)),
      "Please use your work email address"
    ),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name is too long"),
  teamSize: z.enum(["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"], {
    required_error: "Please select your team size",
  }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long")
    .optional()
    .or(z.literal("")),
});

export type LeadFormSchema = z.infer<typeof leadFormSchema>;
