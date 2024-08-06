import Link from "next/link"
import Image from "next/image"
import LogoBlanco from "@/app/assets/logo-blanco.png"

export function Footer(){
    return(
        <>
            <div className="flex items-center justify-between w-full h-full mt-10 text-white bg-blue-gelco">
                <div className="flex flex-col items-center ml-[170px]">
                    <div className="my-6">
                        <Image src={LogoBlanco} height={130} width={130} alt="Logo Gelco"/>
                    </div>
                    <p className="ml-6">¡Construyendo la Gelco del futuro!</p>
                </div>
                <div className="flex items-center mr-16 justify-items-center gap-x-16">
                    <div className="my-10">
                        <p className="mb-1 text-xl font-semibold">Recursos</p>
                        <ul className="flex flex-col gap-y-2">
                            <Link className="text-glow hover:underline" href="/">Conferencia anual</Link>
                            <Link className="text-glow hover:underline" href="/">Infografía</Link>
                            <Link className="text-glow hover:underline" href="/">Vídeo</Link>
                        </ul>
                    </div>
                    <div className="my-10">
                        <h2 className="mb-1 text-xl font-semibold">Sobre nosotros</h2>
                        <ul className="flex flex-col gap-y-2">
                            <Link className="text-glow hover:underline" href="/">Contacto</Link>
                            <Link className="text-glow hover:underline" href="/">Manual de convivencia</Link>
                            <Link className="text-glow hover:underline" href="/">Lineamientos Gelco</Link>
                        </ul>
                    </div>
                    <div className="my-10">
                        <h2 className="mb-1 text-xl font-semibold">Legal</h2>
                        <ul className="flex flex-col gap-y-2">
                            <Link className="text-glow hover:underline" href="/">Términos y condiciones</Link>
                            <Link className="text-glow hover:underline" href="/">Políticas de privacidad</Link>
                            <Link className="text-glow hover:underline" href="/">Proveedores</Link>                        
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}