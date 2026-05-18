const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

async function request<T>(path: string, options: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers ?? {}) },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data as T;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export const api = {
  joinWaitlist: (body: {
    name: string;
    email: string;
    phone: string;
    role: string;
    school?: string;
  }) =>
    request<ApiResponse>('/api/waitlist', {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  sendContact: (body: {
    name: string;
    email: string;
    role: string;
    subject: string;
    message: string;
  }) =>
    request<ApiResponse>('/api/contact', {
      method: 'POST',
      body: JSON.stringify(body),
    }),
};
