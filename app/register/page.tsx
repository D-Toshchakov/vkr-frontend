'use client';

import { NextPage } from "next";
import '../assets/styles/globals.scss'
import Register from "../components/screens/auth/register";
import NextAuthProvider from "../components/providers/nextAuthProvider";
import { Session } from "next-auth";

interface Props {
    children?: React.ReactNode,
    session: Session | null
}

const RegisterPage: NextPage<Props> = ({ session }): JSX.Element => {
    return (
        <NextAuthProvider session={session}>
            <Register />
        </NextAuthProvider>
    )
}

export default RegisterPage
