import { useQuery } from "@tanstack/react-query"
import UserService from "../services/user/user.service"
import { IFullUser, IUser } from "../types"

export const useProfile = (id: number) => {
    const { data } = useQuery(
        ['get profile', id],
        () => UserService.getProfile(),
        {
            select: ({ data }) => data
        }
    )

    return {profile: data }
}