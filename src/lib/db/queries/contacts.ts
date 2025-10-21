"use server";

import { db } from "..";
import { ContactsTable } from "../schema";
import { Contact } from "@/lib/actions/contacts";

export const createContactDB = async (contact: Contact) => {
  return await db.insert(ContactsTable).values(contact).returning();
};
