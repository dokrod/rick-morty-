const BASE_URL = "https://rickandmortyapi.com/api";

function wait(delay: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function request<T>(url: string): Promise<T> {
  const options: RequestInit = { method: "GET" };

  return wait(100)
    .then(() => fetch(BASE_URL + url, options))
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      return response.json();
    });
}

export const client = {
  get: <T>(url: string): Promise<T> => request<T>(url),
};
