"use server";

import { createContactDB } from "../db/queries/contacts";

export type Contact = {
  name: string;
  email: string;
  company: string;
  phone: string;
};

export async function createContact(contact: Contact) {
  return await createContactDB(contact);
}
