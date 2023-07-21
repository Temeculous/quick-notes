import sendRequest from "./send-requests";

const BASE_URL = "/api/users";

export async function signUp(userData) {
  sendRequest(BASE_URL, "POST", userData);
}

export async function login(credentials) {
  sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
