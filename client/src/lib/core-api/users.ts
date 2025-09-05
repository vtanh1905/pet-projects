import { callAPI } from "../utils";
import { CORE_API_URL } from "../constants";

export async function getUsers(options: RequestInit = {}) {
  return callAPI(`${CORE_API_URL}/users`, options);
}
