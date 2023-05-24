import axios from "axios";;
import NextAuth, { NextAuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

type jwt = {
    id: string;
    name: string;
    email: string;
    role: string;
    access_token: string;
    refresh_token: string;
    access_token_exp: number
};

interface IEmailPassword {
    email: string,
    password: string
};

const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/signin'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials as IEmailPassword

                const res = await axios.post<User>('http://localhost:8000/auth/login', {
                    "email": email,
                    "password": password,
                })

                if (res.data) {
                    // Any object returned will be saved in `user` property of the JWT
                    return res.data
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        })
    ],
    jwt: {
        maxAge: 60*60
    },
    callbacks: {
        async jwt({ token, user }) {
            console.log("TOKEN", token, "\nUser", user);
            if (user) {
                // This will only be executed at login. Each next invocation will skip this part.
                token.refresh_token = user.refresh_token;
                token.access_token = user.access_token;
                
                return { ...token, ...user };
            }

            console.log("EXP", token.exp)
            console.log(Date.now() / 1000 - token.exp);
            
            if (Date.now() / 1000 < token.exp) {
                return token;
            }

            // If the call arrives after 23 hours have passed, we allow to refresh the token.
            const refresh = await refreshAccessToken(token);
            token.access_token = refresh.access_token
            token.refresh_token = refresh.refresh_token
            return token;
        },
        async session({ session, token }) {
            console.log("SESSION cb", session, 'in Session token', token);

            // console.log('TOKEN', token);

            session.user = token as jwt
            // console.log('SESSION', session);

            return session;
        },
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

async function refreshAccessToken(tokenObject: JWT) {
    try {
        // Get a new set of tokens with a refreshToken
        const tokenResponse = await axios.post(
            process.env.SERVER_URL + 'auth/refreshToken',
            null,
            { headers: { Authorization: `Bearer ${tokenObject.refresh_token}` } });

        return {
            ...tokenObject,
            accessToken: tokenResponse.data.accessToken,
            refreshToken: tokenResponse.data.refreshToken
        }
    } catch (error) {
        return {
            ...tokenObject,
            error: "RefreshAccessTokenError",
        }
    }
}