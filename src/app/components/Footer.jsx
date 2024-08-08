import Link from "next/link"
import Image from "next/image"
import LogoBlanco from "@/app/assets/logo-blanco.png"

export function Footer(){
    return(
        <>
            <footer className="flex items-center justify-between w-full h-full mt-10 text-slate-400 bg-blue-gelco">
                <div className="flex flex-col items-center ml-[170px] my-8">
                    <div className="my-6 ml-4">
                        <Image src={LogoBlanco} height={130} width={130} alt="Logo Gelco"/>
                    </div>
                    <p className="ml-6">¡Construyendo la Gelco del futuro!</p>
                </div>
                <div className="flex items-center my-8 mr-20 justify-items-center gap-x-16">
                    <div className="my-10">
                        <p className="my-1 text-xl font-semibold text-white">Recursos</p>
                        <ul className="flex flex-col gap-y-3">
                            <Link className="hover:text-white hover:underline" href="#">Conferencia anual</Link>
                            <Link className="hover:text-white hover:underline" href="#">Infografía</Link>
                            <Link className="hover:text-white hover:underline" href="#">Vídeo</Link>
                        </ul>
                    </div>
                    <div className="my-10">
                        <h2 className="my-1 text-xl font-semibold text-white">Sobre nosotros</h2>
                        <ul className="flex flex-col gap-y-3">
                            <Link className="hover:text-white hover:underline" href="#">Contacto</Link>
                            <Link className="hover:text-white hover:underline" href="#">Manual de convivencia</Link>
                            <Link className="hover:text-white hover:underline" href="#">Lineamientos Gelco</Link>
                        </ul>
                    </div>
                    <div className="my-10">
                        <h2 className="my-1 text-xl font-semibold text-white">Legal</h2>
                        <ul className="flex flex-col gap-y-3">
                            <Link className="hover:text-white hover:underline" href="#">Términos y condiciones</Link>
                            <Link className="hover:text-white hover:underline" href="#">Políticas de privacidad</Link>
                            <Link className="hover:text-white hover:underline" href="#">Proveedores</Link>                        
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}