'use server'

import { callAPI } from "../utils";
import { CORE_API_URL } from "../constants";

export type CreateUserData = {
  name: string,
  email: string,
  phone: string,
  date_of_birth: string;
};

export async function getUsers(options: RequestInit = {}) {
  return callAPI(`${CORE_API_URL}/users`, options);
}

export async function createUser(createUserData: CreateUserData, options: RequestInit = {}) {
  return callAPI(`${CORE_API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(createUserData),
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
}