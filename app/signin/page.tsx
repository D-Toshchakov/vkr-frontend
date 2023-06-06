'use client';

import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import '../assets/styles/globals.scss'
import Login from "../components/screens/auth/login";
import NextAuthProvider from "../components/providers/nextAuthProvider";
import { Session } from "next-auth";

interface Props {
    children?: React.ReactNode,
    session: Session | null
}

const SignIn: NextPage<Props> = ({ session }): JSX.Element => {
    return (
        <NextAuthProvider session={session}>
            <Login />
        </NextAuthProvider>
    )
}

export default SignIn
