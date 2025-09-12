'use server'

import { callAPI } from "../utils";
import { CORE_API_URL } from "../constants";

export async function getUserImports(options: RequestInit = {}) {
  return callAPI(`${CORE_API_URL}/imports/users`, options);
}

export async function importUsers(options: RequestInit = {}) {
  return callAPI(`${CORE_API_URL}/imports/users`, {
    ...options,
    method: 'POST',
  });
}
