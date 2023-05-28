import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useAuth(shouldRedirect: boolean) {
    const { data: session } = useSession();
    const router = useRouter();
    const pathName = usePathname()
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (session?.error === "RefreshAccessTokenError") {
            signOut({ callbackUrl: '/signin', redirect: shouldRedirect });
        }

        if (session === null) {
            if (pathName !== '/signin') {
                router.replace('/signin');
            }
            setIsAuthenticated(false);
        } else if (session !== undefined) {
            if (pathName === '/signin' || pathName === '/register') {
                router.replace('/');
            }
            setIsAuthenticated(true);
        }
    }, [session]);

    return isAuthenticated;
}