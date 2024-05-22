import Image from "next/image"
import LogoGelco from "@/app/assets/logo.png"

export function Logo(){
    return (
        <span>
          <Image src={LogoGelco} alt="Gelco Logo" width={100} height={100} className="m-6"/>
        </span>
    )
}