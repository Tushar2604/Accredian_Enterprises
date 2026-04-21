import type { Step } from "@/lib/types";

export const steps: Step[] = [
  {
    id: "discovery",
    number: "01",
    title: "Needs Assessment",
    description: "We start with a deep-dive audit of your team's skill gaps and strategic objectives.",
    detail:
      "Our L&D consultants conduct structured interviews, skills benchmarking, and role-based gap analysis to map a precise learning agenda for your organization.",
  },
  {
    id: "design",
    number: "02",
    title: "Program Design",
    description: "Custom learning paths are architected with your domain, culture, and timelines in mind.",
    detail:
      "From curriculum selection to cohort composition and mentor matching — every program is built to your specifications, not off-the-shelf.",
  },
  {
    id: "deploy",
    number: "03",
    title: "Deployment & Onboarding",
    description: "Seamless rollout with zero disruption to your team's workflow.",
    detail:
      "White-glove onboarding, SSO integration, HRMS sync, and dedicated account management ensure a day-one-ready launch.",
  },
  {
    id: "track",
    number: "04",
    title: "Track & Optimize",
    description: "Live dashboards surface progress, risks, and ROI in real time.",
    detail:
      "Monthly business reviews, completion nudges, and adaptive content recommendations keep engagement high and learning sticky long after program end.",
  },
];
