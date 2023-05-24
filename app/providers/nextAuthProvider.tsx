'use client'
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import RefreshTokenHandler from "../components/refreshTokenHandler";
import { useState } from "react";

type Props = {
  children?: React.ReactNode;
  session: Session
};

export const NextAuthProvider = ({ children, session }: Props) => {
  const [refreshInterval, setRefreshInterval] = useState(0)
  return (
  <SessionProvider session={session} refetchInterval={refreshInterval}>
    {children}
    <RefreshTokenHandler setRefreshInterval={setRefreshInterval}/>
  </SessionProvider>
  )
};
