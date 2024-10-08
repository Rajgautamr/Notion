"use client"

import { useConvexAuth } from "convex/react";
import { SignInButton} from "@clerk/clerk-react";
import Link from "next/link";
import { useScrolltop } from "@/hooks/useScrolltop";
import Logo from "./logo";
import { UserButton } from "@clerk/clerk-react";
import { ModeToggle } from "@/components/ui/modetoggle";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/spinner";
import { cn } from "@/lib/utils";


export const Navbar = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    const scrolled = useScrolltop();
    return ( 
        <div className={cn("z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6" , scrolled && "border-b shadow-sm")}>
            <Logo/>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (
                    <>
                    <Loader></Loader></>
                )}
                {!isAuthenticated && !isLoading &&(
                    <><SignInButton mode="modal">
                        <Button variant="ghost" size="sm">Login</Button></SignInButton>
                        <SignInButton mode="modal">
                        <Button size="sm">Get Notion Free</Button></SignInButton></>
                )}
                {isAuthenticated && !isLoading &&(
                    <>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/documents">Enter Notion</Link>
                        </Button>
                        <UserButton  />
                    </>
                )}
                <ModeToggle/>
            </div>
        </div>
        
     );
}
 
export default Navbar;