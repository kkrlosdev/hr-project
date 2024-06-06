import Github from "./GitHub"
import Link from "next/link"

export function Footer(){
    return(
        <>
            <div className="flex items-center justify-center w-full h-10 text-white bg-blue-gelco">
                2024.
                <Link href="https://github.com/kkrlosdev/hr-project" target="_blank" className="ml-3">
                    <Github/>
                </Link>
            </div>
        </>
    
    )
}