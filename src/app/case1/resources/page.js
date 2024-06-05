import { BackButton } from "@/app/components/BackButton"
import Link from "next/link"

export default function Case1Video(){
    return(
        <>
            <video muted autoPlay loop className="absolute top-0 left-0 object-cover w-full h-full -z-10">
                    <source src="/videos/ResourcesBackground.mp4" type="video/mp4"></source>
                </video>
            <div className="block">
                <BackButton/>
            </div>
            <div className="flex items-center justify-center">
                <h1 className="mt-5 text-2xl font-semibold text-white shadow-2xl">PDF&#39;s y Recursos Descargables</h1>
            </div>
            <main className="flex flex-wrap items-center justify-center overflow-auto gap-y-6 gap-x-5" style={{marginTop:"50px"}}>
                <section className="flex flex-col items-center justify-center p-8 mt-5 text-justify bg-red-700 rounded-lg shadow-lg" style={{width:"500px", height:"162px"}}>
                    <h2 className="font-semibold text-white">1. Principios rectores sobre las empresas y los derechos humanos</h2>
                    <Link href="https://www.ohchr.org/sites/default/files/documents/publications/guidingprinciplesbusinesshr_sp.pdf" target="_blank" className="flex items-center justify-center w-32 h-10 my-1 text-center text-white bg-red-600 rounded">
                        Descargar<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </Link>
                </section>

                <section className="relative flex flex-col items-center justify-center p-8 mt-5 text-justify rounded-lg shadow-lg bg-blue-gelco" style={{width:"500px", height:"162px", maxHeight:"162px", maxWidth:"500px"}}>
                    <h2 className="absolute font-semibold text-white top-1/4">2. PrinBlaldsakldaskdaskjdaskjdkjasdkjasblasdaskldkas</h2>
                    <Link href="https://www.ohchr.org/sites/default/files/documents/publications/guidingprinciplesbusinesshr_sp.pdf" target="_blank" className="absolute flex items-center justify-center w-32 h-10 my-1 text-center text-white bg-red-600 rounded bottom-6">
                        Ver vídeo<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                </section>

                <section className="flex flex-col items-center justify-center p-8 text-justify rounded-lg shadow-lg bg-cyan-gelco" style={{width:"500px", height:"162px"}}>
                    <h2 className="font-semibold text-white">3. pRUEBAPruebaPruebaPrueba</h2>
                    <Link href="https://www.ohchr.org/sites/default/files/documents/publications/guidingprinciplesbusinesshr_sp.pdf" target="_blank" className="flex items-center justify-center w-32 h-10 my-1 text-center text-white bg-red-600 rounded">
                        Descargar<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </Link>
                </section>

                <section className="flex flex-col items-center justify-center p-8 text-justify rounded-lg shadow-lg bg-pink-gelco" style={{width:"500px", height:"162px"}}>
                    <h2 className="font-semibold text-white">4. PTextotextotextotextotextoTEXTOTEXTOTEXTo</h2>
                    <Link href="https://www.ohchr.org/sites/default/files/documents/publications/guidingprinciplesbusinesshr_sp.pdf" target="_blank" className="flex items-center justify-center w-32 h-10 my-1 text-center text-white bg-red-600 rounded">
                        Descargar<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </Link>
                </section>
            </main>
        </>
    )
}