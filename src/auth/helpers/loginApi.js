export async function loginApi({ email, password }) {
  const baseUrl = import.meta.env.VITE_microservice_OPERATOR_API_URL || import.meta.env.VITE_microservice_operator_API_URL || "http://localhost:8082";
  const url = `${baseUrl}/usuarios/login?username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Credenciales incorrectas. Intenta de nuevo.");
  }

  return response.json();
}
