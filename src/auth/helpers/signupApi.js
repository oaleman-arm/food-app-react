export async function signupApi({ name, email, password }) {
  const baseUrl = import.meta.env.VITE_microservice_OPERATOR_API_URL || import.meta.env.VITE_microservice_operator_API_URL || "http://localhost:8082";
  const url = `${baseUrl}/usuarios`;

  const body = JSON.stringify({
    nombre: name,
    username: email,
    correo: email,
    password,
    estado: true,
    roll: 1,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Error al crear la cuenta.");
  }

  return response.json();
}
