
import * as z from "zod";

export const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  middleName: z.string().optional(),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
});

export const contactInfoSchema = z.object({
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  phoneType: z.enum(["mobile", "home", "work"]),
});

export const addressSchema = z.object({
  unitNumber: z.string().optional(),
  streetNumber: z.string().min(1, "Street number is required"),
  addressLine1: z.string().min(5, "Address line must be at least 5 characters"),
  addressLine2: z.string().optional(),
  city: z.string().min(2, "City must be at least 2 characters"),
  zipCode: z.string().min(5, "ZIP code must be at least 5 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
});

export const passwordSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;
export type ContactInfoFormValues = z.infer<typeof contactInfoSchema>;
export type AddressFormValues = z.infer<typeof addressSchema>;
export type PasswordFormValues = z.infer<typeof passwordSchema>;
