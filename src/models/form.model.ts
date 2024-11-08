import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().email("Invalid Email.").min(1, "Email is mandatory"),
  password: z.string().min(6, "The password must be at least 6 characters"),
})

export type FormValuesLogin = z.infer<typeof schemaLogin>;

export const schemaRegister = z.object({
  name: z.string().min(1, "Name is mandatory"),
  email: z.string().email("Invalid Email").min(1, "Email is mandatory"),
  password: z.string().min(6, "The password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "The confirmation must be at least 6 characters")
}).refine(data => data.password !== data.confirmPassword, {
  message: "Passwords are different",
  path: ['confirmPassword']
})

export type FormValuesRegister = z.infer<typeof schemaRegister>;