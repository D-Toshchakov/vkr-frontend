import { useSession } from "next-auth/react";
import { useEffect } from "react";

type Props = {
    setRefreshInterval: React.Dispatch<React.SetStateAction<number>>
}

const RefreshTokenHandler = (props: Props) => {
    const { data: session } = useSession();

    useEffect(() => {
        if (!!session) {
            // We did set the token to be ready to refresh after 23 hours, here we set interval of 23 hours 30 minutes.
            const timeRemaining = Math.round((((session.user.access_token_exp - 30 * 60 * 1000) - Date.now()) / 1000));
            props.setRefreshInterval(timeRemaining > 0 ? timeRemaining : 0);
            console.log("refresh handler time reainning", timeRemaining);
        }
    }, [session]);

    return null;
}

export default RefreshTokenHandler;