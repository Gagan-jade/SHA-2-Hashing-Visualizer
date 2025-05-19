import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Schema for hashing requests and responses
export const hashRequestSchema = z.object({
  message: z.string().min(1, "Message is required"),
  algorithm: z.enum(["SHA-256", "SHA-512"]).default("SHA-256")
});

export const hashResponseSchema = z.object({
  hash: z.string(),
  algorithm: z.enum(["SHA-256", "SHA-512"])
});

export type HashRequest = z.infer<typeof hashRequestSchema>;
export type HashResponse = z.infer<typeof hashResponseSchema>;
