import Image from "next/image"
import LogoBlanco from "@/app/assets/logo-blanco.png"
import { LinkFooter } from "./LinkFooter"

export function Footer(){
    return(
        <>
            <footer className="flex items-center justify-between w-full h-full mt-12 text-slate-400 bg-blue-gelco">
                <div className="flex flex-col items-center ml-[170px] my-4">
                    <div className="my-6 ml-4">
                        <Image src={LogoBlanco} height={130} width={130} alt="Logo Gelco" title="Logo de Gelco"/>
                    </div>
                    <span className="ml-6">¡Construyendo la Gelco del futuro!</span>
                </div>
                <div className="flex items-center my-4 mr-20 justify-items-center gap-x-16">
                    <div className="my-10">
                        <h2 className="my-1 text-xl font-semibold text-white">Recursos</h2>
                        <ul className="flex flex-col gap-y-3">
                            <LinkFooter href="#" text="Conferencia anual"/>
                            <LinkFooter href="#" text="Infografía"/>
                            <LinkFooter href="#" text="Vídeo"/>
                        </ul>
                    </div>
                    <div className="my-10">
                        <h2 className="my-1 text-xl font-semibold text-white">Sobre nosotros</h2>
                        <ul className="flex flex-col gap-y-3">
                            <LinkFooter href="#" text="Contacto"/>
                            <LinkFooter href="#" text="Manual de convivencia"/>
                            <LinkFooter href="#" text="Lineamientos Gelco"/>
                        </ul>
                    </div>
                    <div className="my-10">
                        <h2 className="my-1 text-xl font-semibold text-white">Legal</h2>
                        <ul className="flex flex-col gap-y-3">
                            <LinkFooter href="#" text="Términos y condiciones"/>
                            <LinkFooter href="#" text="Políticas de privacidad"/>
                            <LinkFooter href="#" text="Proveedores"/>                        
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}