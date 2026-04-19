import { currentUser } from "@clerk/nextjs/server";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { getUserByClerkId } from "@/actions/user.action";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { LinkIcon, MapPinIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
async function SidebarHome() {
  // const authUser = await currentUser();
  // if (!authUser) return <UnAuthenticatedSidebar />;

  // const user = await getUserByClerkId(authUser.id);
  // if (!user) return null;
  return (
    // <div className="sticky top-20">
    //   <Card>
    //     <CardContent className="pt-6">
    //       <div className="flex flex-col items-center text-center">
    //         <Link
    //           href={`/profile/${user.username}`}
    //           className="flex flex-col items-center justify-center"
    //         >
    //           <Avatar className="w-20 h-20 border-2 ">
    //             <AvatarImage src={user.image || "/avsatar.png"} />
    //           </Avatar>

    //           <div className="mt-4 space-y-1">
    //             <h3 className="font-semibold">{user.name}</h3>
    //             <p className="text-sm text-muted-foreground">{user.username}</p>
    //           </div>
    //         </Link>

    //         {user.bio && (
    //           <p className="mt-3 text-sm text-muted-foreground">{user.bio}</p>
    //         )}

    //         <div className="w-full">
    //           <Separator className="my-4" />
    //           <div className="flex justify-between">
    //             <div>
    //               <p className="font-medium">{user._count.following}</p>
    //               <p className="text-xs text-muted-foreground">Following</p>
    //             </div>
    //             <Separator orientation="vertical" />
    //             <div>
    //               <p className="font-medium">{user._count.followers}</p>
    //               <p className="text-xs text-muted-foreground">Followers</p>
    //             </div>
    //           </div>
    //           <Separator className="my-4" />
    //         </div>

    //         <div className="w-full space-y-2 text-sm">
    //           <div className="flex items-center text-muted-foreground">
    //             <MapPinIcon className="w-4 h-4 mr-2" />
    //             {user.location || "No location"}
    //           </div>
    //           <div className="flex items-center text-muted-foreground">
    //             <LinkIcon className="w-4 h-4 mr-2 shrink-0" />
    //             {user.website ? (
    //               <a
    //                 href={`${user.website}`}
    //                 className="hover:underline truncate"
    //                 target="_blank"
    //               >
    //                 {user.website}
    //               </a>
    //             ) : (
    //               "No website"
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>
    <div className="sticky top-60">
      <Card className="bg-muted/40 hover:bg-muted/70">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold ">
            Personal Information and Contact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-20 h-20 border-2 ">
              <AvatarImage src={"/personalphoto.png"} />
            </Avatar>
          </div>
          <div className="mt-4 space-y-1 text-center">
            <p className="text-muted-foreground mb-4 text-center">
              📍 Belém, Brazil
            </p>
            <a
              href="https://wa.me/5591980446694"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center inline-flex items-center gap-1
                         bg-primary text-primary-foreground
                         px-5 py-3 rounded-xl
                         hover:opacity-90
                         transition"
            >
              <FaWhatsapp className="text-x5 " />
              {/**/}
              +55 91 98044-6694
              {/*Fale comigo no WhatsApp 💬 Fale comigo*/}
            </a>
            <h3 className="text-left text-x5 ">pantoja.ti@gmail.com</h3>
            {/*<p className="text-sm text-muted-foreground">pantoja.ti@gmail.com</p>*/}
            <p className="text-left text-x8  ">
              http://lattes.cnpq.br/3730346542804597
            </p>
          </div>
          {/*<p className="text-left text-muted-foreground mb-4">
              Email: pantoja.ti@gmail.com
            </p>*/}

          {/*<p className="text-left text-muted-foreground mb-4">
              Phone: +55 91 98044-6694
            </p>*/}

          {/**/}
        </CardContent>
      </Card>
    </div>
  );
}

export default SidebarHome;

// const UnAuthenticatedSidebar = () => (

// );
