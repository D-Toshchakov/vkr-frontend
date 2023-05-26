'use client';

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: Session | null
};

const NextAuthProvider = ({ children, session }: Props) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
};

export default NextAuthProvider

// 'use client';

// import React, { ReactNode } from "react";
// import { SessionProvider } from "next-auth/react";
// interface Props {
//   children: ReactNode;
// }

// const NextAuthProvider = ({ children }: Props) => {
//   return <SessionProvider>{children}</SessionProvider>;
// };

// export default NextAuthProvider;