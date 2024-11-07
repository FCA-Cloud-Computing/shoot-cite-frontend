import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Invalid Email.").min(1, "Email is mandatory"),
  password: z.string().min(6, "The password must be at least 6 characters"),
})

export type FormValues = z.infer<typeof schema>;