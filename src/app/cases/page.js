import {Logo} from "../components/Logo"
import { KnowMoreButton } from "../components/KnowMore"

export default function Cases(){
    return (
        <>
            <header>
                <Logo />
                <h1 className="ml-6 text-3xl blue-gelco">DERECHOS <br/> HUMANOS </h1>
            </header>

            <main className="flex justify-center mb-2 space-x-24">
                
                <section className="flex flex-col items-center mt-4">
                    <h1 className="self-start font-semibold blue-gelco">Caso 1</h1>
                    <h2 className="self-start font-semibold blue-gelco">Derechos humanos</h2>
                    <div className="my-4 text-xl font-semibold text-white transition-all rounded w-72 h-72 bg-blue-gelco hover:scale-105">
                        <h1 className="m-2">Iniciar <br/> Caso 1</h1>
                    </div>
                    <KnowMoreButton/>
                </section>

                <section className="flex flex-col items-center">
                    <h1 className="self-start font-semibold blue-gelco">Caso 2</h1>
                    <h2 className="self-start font-semibold blue-gelco">Debida diligencia</h2>
                    <div className="my-4 text-xl font-semibold text-white transition-all rounded w-72 h-72 bg-pink-gelco hover:scale-105">
                        <h1 className="m-2">Iniciar <br/> Caso 2</h1>
                    </div>
                    <KnowMoreButton/>
                </section>
                
                <section className="flex flex-col items-center mt-1">
                    <h1 className="self-start font-semibold blue-gelco">Caso 3</h1>
                    <h2 className="self-start font-semibold blue-gelco">Remediación</h2>
                    <div className="my-4 text-xl font-semibold text-white transition-all rounded w-72 h-72 bg-cyan-600 hover:scale-105">
                        <h1 className="m-2">Iniciar <br/> Caso 3</h1>
                    </div>
                    <KnowMoreButton/>
                </section>
            </main>
        </>
    )
}