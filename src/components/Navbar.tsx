// "use client";
import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";

async function Navbar() {
  const user = await currentUser();
  // if (user) await syncUser(); // POST
  //
  // const user = await currentUser();
  await syncUser(); // POST

  try {
    console.log("cjhegou");
    const { userId } = await auth();
    const users = await prisma.user.findMany();
    console.log(users);
  } catch (error) {
    console.log("Error in syncUser", error);
  }
  // }

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              Socially
            </Link>
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
