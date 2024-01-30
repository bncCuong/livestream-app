/** @format */

import { UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return <UserButton />;
}
