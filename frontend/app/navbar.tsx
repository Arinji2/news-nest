import { cookies } from "next/headers";
import NavbarClient from "./(nav)/navbar.client";

export default function Navbar() {
  const tokenCookie = cookies().has("token");
  const isLoggedIn = tokenCookie ? true : false;

  return <NavbarClient isLoggedIn={isLoggedIn} />;
}
