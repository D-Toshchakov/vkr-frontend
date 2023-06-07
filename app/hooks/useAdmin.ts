import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useAuth(adminOnly?: boolean) {
    const { data: session } = useSession();
    const [isAdmin, setIsAdmin] = useState(false);

    console.log(session?.user.role);
    
    useEffect(() => {
        if (session?.user.role === 'ADMIN') {
            setIsAdmin(true)
        }

    }, [session]);

    return isAdmin;
}