import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { TbBrandBlogger } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";
import { currentUser } from "@clerk/nextjs/server";
// import { FaBlogger } from "react-icons/fa6";

async function DesktopNavbar() {
  const user = await currentUser();
  // console.log(user);
  return (
    // <div className="hidden md:flex items-center space-x-4">
    // <div className="hidden md:flex items-center justify-start gap-4">
    <div className="hidden md:flex items-center justify-start gap-2 w-full">
      <div className="px-8 hidden md:flex items-center justify-start gap-2 w-full">
        <div className="w-12 h-12 rounded-full border-2 border-sky-500 text-sky-500 flex items-center justify-center font-black text-sm tracking-widest">
          {" "}
          FLP
        </div>
      </div>
      <ModeToggle />

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/blog">
          <TbBrandBlogger />
          {/*<GrBlog />*/}
          {/*<BellIcon className="w-4 h-4" />*/}
          <span className="hidden lg:inline">Blog</span>
        </Link>
      </Button>
    </div>
  );
}
export default DesktopNavbar;
