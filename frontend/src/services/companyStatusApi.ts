export type CompanyInfo = {
  name: string;
  slogan: string;
  project: string;
  version: string;
};

export type CompanyStatus = {
  frontend: string;
  backend: string;
  security: string;
  api: string;
};

export type CompanyService = {
  id: number;
  title: string;
  description: string;
};

export type ProjectStatusItem = {
  label: string;
  value: string;
};

export type CompanyStatusResponse = {
  company: CompanyInfo;
  status: CompanyStatus;
  services: CompanyService[];
  projectStatus: ProjectStatusItem[];
};

const API_URL = "http://localhost:4000/api/company-status";

export async function fetchCompanyStatus(): Promise<CompanyStatusResponse> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Company Status API konnte nicht geladen werden.");
  }

  return response.json();
}
