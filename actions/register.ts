"use server";

import { registerSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validated = registerSchema.safeParse(values);

  if (!validated) {
    return { error: "Invalid information provided!" };
  }

  return { success: "Confirmation email has been sent!" };
};
