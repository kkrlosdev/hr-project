import { Dock } from "./magicui/dock";
import { DockIcon } from "./magicui/dock";
import Icons from "./Icons"

export default function NavDock(){
    return(
        <div className="dockContainer">
            <Dock iconSize={50} iconMagnification={60} iconDistance={50} direction="middle">
                <DockIcon>
                    <Icons.home className="size-6" />
                </DockIcon>

                <DockIcon>
                    <Icons.user className="size-6" />
                </DockIcon>
                
                <DockIcon>
                    <Icons.send className="size-6" />
                </DockIcon>
                
                <DockIcon>
                    <Icons.sun className="size-6" />
                </DockIcon>
            </Dock>
        </div>
    )
}