import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const useAuthRedirect = () => {
    const { data: session } = useSession()

    const { replace } = useRouter()
    useEffect(() => {
        if (session) {
            replace('/')
        }
    }, [session])
}