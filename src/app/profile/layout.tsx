import { ReactNode } from 'react';
import {Header} from "@/lib/header/Header";
import {MenuItem} from "@/lib/menuItem/MenuItem";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="fixed top-16 left-16 bottom-0 w-56 border-r z-10">
        <div className="border-b">
          <MenuItem href="/profile">Profile</MenuItem>
          <MenuItem href="/profile/settings">Settings</MenuItem>
        </div>
      </div>
      <div className="pt-16 pl-56 relative z-0">{children}</div>
    </>
  );
}
