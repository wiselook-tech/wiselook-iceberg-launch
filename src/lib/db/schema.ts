import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const ContactsTable = pgTable("contacts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  company: varchar({ length: 255 }).notNull(),
  phone: varchar({ length: 20 }),
});
