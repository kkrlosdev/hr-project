import { Dock } from "./magicui/dock";
import { DockIcon } from "./magicui/dock";
import { Separator } from "./ui/Separator";
import Icons from "./Icons"
import Link from "next/link";

export default function NavDock(){
    return(
        <div className="dockContainer">
            <Dock iconSize={50} iconMagnification={60} iconDistance={50} direction="middle">
                <Link href="/cases">
                    <DockIcon>
                        <Icons.home className="size-4" />
                    </DockIcon>
                </Link>

                <Separator orientation="vertical" className="h-full w-[1px]"/>

                <Link href="#">
                    <DockIcon>
                        <Icons.user className="size-4" />
                    </DockIcon>
                </Link>

                <Link href="#">
                    <DockIcon>
                        <Icons.send className="size-4" />
                    </DockIcon>
                </Link>

                <Separator orientation="vertical" className="h-full w-[1px]"/>

                <Link href="#">
                    <DockIcon>
                        <Icons.sun className="size-4" />
                    </DockIcon>
                </Link>
            </Dock>
        </div>
    )
}