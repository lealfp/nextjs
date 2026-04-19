import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";
import { currentUser } from "@clerk/nextjs/server";
import { FaBlogger } from "react-icons/fa6";

async function DesktopNavbar() {
  const user = await currentUser();
  // console.log(user);
  return (
    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle />

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/blog">
          <FaBlogger />
          {/*<GrBlog />*/}
          {/*<BellIcon className="w-4 h-4" />*/}
          <span className="hidden lg:inline">Blog</span>
        </Link>
      </Button>
    </div>
  );
}
export default DesktopNavbar;
