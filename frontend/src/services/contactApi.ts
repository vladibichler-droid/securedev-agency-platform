export type ContactInfo = {
  company: string;
  email: string;
  phone: string;
  location: string;
  responseTime: string;
  topics: string[];
};

export type ContactRequestPayload = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export type ContactRequestResponse = {
  status: "success" | "error";
  message: string;
  request?: {
    id: string;
    name: string;
    email: string;
    topic: string;
    message: string;
    receivedAt: string;
  };
};

const CONTACT_INFO_URL = "http://localhost:4000/api/contact-info";
const CONTACT_REQUEST_URL = "http://localhost:4000/api/contact-request";

export async function fetchContactInfo(): Promise<ContactInfo> {
  const response = await fetch(CONTACT_INFO_URL);

  if (!response.ok) {
    throw new Error("Kontaktinformationen konnten nicht geladen werden.");
  }

  return response.json();
}

export async function sendContactRequest(
  payload: ContactRequestPayload
): Promise<ContactRequestResponse> {
  const response = await fetch(CONTACT_REQUEST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Kontaktanfrage konnte nicht gesendet werden.");
  }

  return data;
}
