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
import { MdOutlineEmail } from "react-icons/md";
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
    <div className="sticky top-40">
      <Card className="bg-muted/40 ">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold ">
            Personal Information and Contact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-20 h-20 border-2 ">
              <AvatarImage src={"/assets/personalphoto.png"} />
            </Avatar>
            Fagner Leal Pantoja
          </div>
          <div className="flex items-center text-muted-foreground text-center"></div>
          <div className="mt-4 space-y-1 text-center">
            <div className="text-muted-foreground mb-4 text-center">
              <div className="flex items-center text-muted-foreground">
                <MapPinIcon className="w-4 h-4 mr-2" />
                Belém, Brazil
              </div>
              <div className="flex items-center text-muted-foreground">
                <MdOutlineEmail className="w-4 h-4 mr-2" />
                pantoja.ti@gmail.com
              </div>
            </div>

            {/*<p className="text-muted-foreground mb-4 text-center">*/}
            {/*</p>*/}

            {/*<p className="text-muted-foreground mb-4 text-left text-x20">
              <div className="flex items-left text-muted-foreground">
                http://lattes.cnpq.br/3730346542804597
              </div>
            </p>*/}

            <a
              href="https://wa.me/5591980446694"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center inline-flex items-center gap-1
                          text-primary-foreground
                         px-5 py-3 rounded-xl
                         hover:opacity-90
                         transition
                         bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 transition-all duration-150 text-white font-semibold px-5 py-3 rounded-2xl shadow-lg hover:shadow-2xl border border-white/20"
              // bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 transition text-white font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg cursor-pointer"
            >
              <FaWhatsapp className="text-x5 " />
              +55 91 98044-6694
              {/*Fale comigo no WhatsApp 💬 Fale comigo*/}
            </a>
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
