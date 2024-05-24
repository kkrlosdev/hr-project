import {Logo} from "../components/Logo"
import { KnowMoreButton } from "../components/KnowMore"
import Image from "next/image"
import derechos_humanos_card from "@/app/assets/derechos_humanos.svg"
import debida_diligencia_card from "@/app/assets/debida_diligencia.svg"
import remediacion_card from "@/app/assets/remediacion.png"

export default function Cases(){
    return (
        <>
            <header>
                <Logo />
                <h1 className="ml-6 text-3xl blue-gelco">DERECHOS <br/> HUMANOS </h1>
            </header>

            <main className="flex justify-center mb-2 space-x-36">
                
                <section className="flex flex-col items-center mt-4">
                    <h1 className="self-start font-semibold blue-gelco">Caso 1</h1>
                    <div className="my-2 text-xl font-semibold text-white transition-all duration-300 rounded w-72 h-72 bg-blue-gelco hover:scale-105">
                        <h1 className="m-3">Derechos <br/> Humanos</h1>
                        <Image className="ml-4" src={derechos_humanos_card} alt="Derechos humanos" width={250} height={100}/>
                    </div>
                    <KnowMoreButton href="./case1" color="bg-blue-gelco"/>
                </section>

                <section className="flex flex-col items-center">
                    <h1 className="self-start font-semibold blue-gelco">Caso 2</h1>
                    <div className="my-3 text-xl font-semibold text-white transition-all duration-300 rounded w-72 h-72 bg-pink-gelco hover:scale-105">
                        <h1 className="m-3">Debida <br/> Diligencia</h1>
                        <Image className="mt-4 ml-2" src={debida_diligencia_card} alt="Debida Diligencia" width={240} height={100}/>
                    </div>
                    <KnowMoreButton color="bg-pink-gelco" href="/case2"/>
                </section>
                
                <section className="flex flex-col items-center">
                    <h1 className="self-start font-semibold blue-gelco">Caso 3</h1>
                    <div className="my-3 text-xl font-semibold text-white transition-all duration-300 rounded w-72 h-72 bg-cyan-gelco hover:scale-105">
                        <h1 className="m-3">Remediación</h1>
                        <Image className="mt-5 ml-6" src={remediacion_card} alt="Derechos humanos" width={250} height={100}/>
                    </div>
                    <KnowMoreButton color="bg-cyan-gelco" href="/case3"/>
                </section>
            </main>
        </>
    )
}