import NextAuth from "next-auth";
import { UserRole } from "../user.interface";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            role: string;
            access_token: string,
            refresh_token: string,
            access_token_exp: number
        }
        error: string
    }

    interface User {
        user: {
            id: string,
            email: string,
            role: UserRole
        },
        access_token: string,
        refresh_token: string
    }
}