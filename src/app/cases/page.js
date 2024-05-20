import {Logo} from "../components/Logo"

export default function Cases(){
    return (
        <>
            <header>
                <Logo />
                <h1 className="ml-6 text-3xl blue-gelco">DERECHOS <br/> HUMANOS </h1>
            </header>

            <main className="flex justify-center mt-2 space-x-24">
                <section className="mt-6 text-xl font-semibold text-white transition-all rounded w-72 h-72 bg-blue-gelco">
                    <h1 className="m-2">Caso 1</h1>
                    <h2 className="m-2">Derechos humanos</h2>
                </section>
                <section className="text-xl font-semibold text-white transition-all rounded w-72 h-72 bg-pink-gelco">
                    <h1 className="m-2">Caso 2</h1>
                    <h2 className="m-2">Debida diligencia</h2>
                </section>
                <section className="mt-2 text-xl font-semibold text-white transition-all rounded w-72 h-72 bg-cyan-500">
                    <h1 className="m-2">Caso 3</h1>
                    <h2 className="m-2">Remediación</h2>
                </section>
            </main>
        </>
    )
}