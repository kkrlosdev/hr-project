import Image from "next/image"

export function Logo(){
    return (
        <span>
          <Image src="/logo.png" alt="Gelco Logo" width={100} height={100} className="m-6"/>
        </span>
    )
}