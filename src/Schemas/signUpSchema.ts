import { z } from "zod"

export const MobileNumValidation = z
    .string()
    .regex(/^[6-9]\d{9}$/, " please enter a valid mobile number ")

export const signUpSchema = z.object({
    mobileNum: MobileNumValidation,
    avatar: z.string().url(),
    aadharCardUrl: z.string().url(),
    certificateUrl: z.array(z.string().url()),  // Validating array of URLs
});
