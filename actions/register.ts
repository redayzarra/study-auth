"use server";

import { registerSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import db from "@/lib/db";

export const register = async (values: z.infer<typeof registerSchema>) => {
  // Parse the values through our registerSchema
  const validated = registerSchema.safeParse(values);

  // If we don't have a safe parse, throw an error immediately
  if (!validated.success) {
    return { error: "Invalid information provided!" };
  }

  // Extract the values from validated
  const { username, email, password } = validated.data;

  // Hash our password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 0);

  // Confirm that the email is not taken
  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "Email is already is use" };
  }

  await db.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User created!" };
};
