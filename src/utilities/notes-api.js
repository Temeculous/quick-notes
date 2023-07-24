import sendRequest from "./sendRequest";

const BASE_URL = "/api/notes";

export function create(noteBody) {
  return sendRequest(BASE_URL, "POST", noteBody);
}
