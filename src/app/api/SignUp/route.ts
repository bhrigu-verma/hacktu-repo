'use server'
import { asyncHandler } from "@/helpers/asyncHandler";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import { client } from '@/lib/prisma'

import { currentUser } from '@clerk/nextjs/server'

const signUp_personalInfo = asyncHandler(async () => {
    const user = await currentUser()

    if (!user) {
        throw new ApiError(401, "User  not found ");
    }
    console.log(user)
    try {
        // const registered = await client.user.create({
        //     data: {

        //     },
        //     select: {

        //     },
        // })

        // if (registered) {
        //     return { status: 200, user: registered }
        // }
    } catch (error) {
        return { status: 400 }
    }
});


export { signUp_personalInfo }
