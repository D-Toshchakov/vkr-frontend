"use client"

import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import '../assets/styles/globals.css'

interface Props { }

const SignIn: NextPage = (props: Props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({ email: '', password: '' })
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            email: userInfo.email,
            password: userInfo.password,
            redirect: true,
            callbackUrl: '/'
        })
        // console.log(res);
    }
    return (
        <div className="sign-in-form">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                    type="email"
                    value={userInfo.email}
                    onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
                    placeholder="jsmith@gmail.com"
                />
                <input
                    type="password"
                    value={userInfo.password}
                    onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
                    placeholder="*******"
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default SignIn