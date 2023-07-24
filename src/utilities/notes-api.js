import sendRequest from "./send-requests";

const BASE_URL = "/api/notes";

export function create(newNote) {
  return sendRequest(BASE_URL, "POST", newNote);
}

// export function getNotes(user) {
//   return sendRequest(BASE_URL, "GET", user);
// }
