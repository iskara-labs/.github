export const COMPANY = {
  brandName: "Iskara Labs",
  domain: "https://iskaralabs.co",
  founderName: "Sedat İşkara",
  founderAlternateName: "Sedat Iskara",
  founderProfile: "https://iskaralabs.co/founder",
  founderPath: "/founder",
  founderLinkedIn: "https://www.linkedin.com/in/sedatiskara/",
  founderGitHub: "https://github.com/sedatiskara",
  github: "https://github.com/iskara-labs",
  plannedLegalName: "ISKARA LABS OÜ",
  plannedJurisdiction: "Estonia",
  plannedLegalForm: "OÜ",
  incorporationStatus: "Incorporation in progress",
  incorporationStatusTr: "Kuruluş aşamasında",
  legalEntityExists: false,
} as const;

export const LEGAL_READINESS = [
  ["Development brand", "Iskara Labs", "Active"],
  ["Planned legal name", COMPANY.plannedLegalName, "Planned"],
  ["Jurisdiction", COMPANY.plannedJurisdiction, "Planned"],
  ["Legal form", COMPANY.plannedLegalForm, "Planned"],
  ["Registry code", "Not issued", "Pending incorporation"],
  ["VAT number", "Not issued", "Pending incorporation"],
  ["Registered address", "Not published", "Pending verification"],
] as const;
