import { z } from "zod"

export const MobileNumValidation = z
    .string()
    .regex(/^[6-9]\d{9}$/, " please enter a valid mobile number ")