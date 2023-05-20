export interface IUser {
    id: number,
    email: string,
    name: string,
    role: UserRole,
    avatarPath: string,
    phone: string,
}

export type UserRole = "ADMIN" | "USER"