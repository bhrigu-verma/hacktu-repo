import mongoose, { Schema, Document } from "mongoose";


export interface User extends Document {
    username: string,
    userId: string,
    email: string,
    mobileNum: number,
    isAdmin: boolean,
    ProfileComplete: boolean,
    UserCoins: number,
    Role: string,
    avatarUrl: string,

}


const userSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNum: {
        type: Number,
        required: true,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    ProfileComplete: {
        type: Boolean,
        default: false,
    },
    UserCoins: {
        type: Number,
        default: 0,
    },
    Role: {
        type: String,
    },
    avatarUrl: {
        type: String,
    },

}, { timestamps: true })
