import Github from "./GitHub"
import Link from "next/link"

export function Footer(){
    return(
        <>
            <div className="flex items-center justify-center w-full h-10 text-white bg-blue-gelco">
                <Link href="https://github.com/kkrlosdev/hr-project" target="_blank">
                    <Github/>
                </Link>
            </div>
        </>
    
    )
}