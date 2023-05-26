import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
    interface JWT {
        role: UserRole,
        id: string;
        access_token: string,
        refresh_token: string,
        access_token_exp: number,
    }
}