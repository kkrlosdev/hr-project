import Link from "next/link"

export function LinkFooter({href, text}){
    return(
        <>
            <Link className="hover:text-white hover:underline w-fit" href={href}>{text}</Link>
        </>
    )
}