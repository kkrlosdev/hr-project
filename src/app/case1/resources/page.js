import { BackButton } from "@/app/components/BackButton"
import Link from "next/link"

export default function Case1Resources(){
    return(
        <>
            <video muted autoPlay loop className="absolute top-0 left-0 object-cover w-full h-full -z-10">
                    <source src="/videos/ResourcesBackground.mp4" type="video/mp4"></source>
                </video>
            <div className="block">
                <BackButton/>
            </div>
            <div className="flex items-center justify-center">
                <h1 className="mt-5 text-3xl font-semibold text-white shadow-2xl">PDF&#39;s y Recursos Descargables</h1>
            </div>
            <main className="flex flex-wrap items-center justify-center overflow-auto gap-y-6 gap-x-5" style={{marginTop:"50px"}}>

                <section className="relative flex flex-col items-center justify-center p-8 mt-5 text-justify rounded-lg shadow-lg" style={{width:"500px", height:"162px", backgroundColor:"rgba(199, 21, 21, 0.85)"}}>
                    <h2 className="absolute mx-5 font-semibold text-white top-10">1. Principios rectores sobre las empresas y los derechos humanos</h2>
                    <Link href="https://www.ohchr.org/sites/default/files/documents/publications/guidingprinciplesbusinesshr_sp.pdf" target="_blank" className="absolute flex items-center justify-center w-32 h-10 text-center text-white bg-red-600 border border-red-200 rounded bottom-6">
                        Descargar<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </Link>
                </section>

                <section className="relative flex flex-col items-center justify-center p-8 mt-5 overflow-visible text-justify rounded-lg shadow-lg" style={{width:"500px", height:"162px", maxHeight:"162px", maxWidth:"500px", backgroundColor:"rgba(052, 044, 125, 0.85)"}}>
                    <h2 className="absolute font-semibold text-white top-1/4">2. Charla de la ONU sobre los Derechos Humanos</h2>
                    <Link href="hhttps://www.youtube.com/watch?v=dgfX_6noLnY" target="_blank" className="absolute flex items-center justify-center w-32 h-10 text-center text-white bg-blue-800 border rounded border-l-blue-200 bottom-6">
                        Ver vídeo<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </Link>
                </section>

                <section className="relative flex flex-col items-center justify-center p-8 text-justify rounded-lg shadow-lg" style={{width:"500px", height:"162px", backgroundColor:"rgba(000, 161, 200, 0.85)"}}>
                    <h2 className="absolute font-semibold text-white top-10">3. Sitio web oficial sobre los Derechos Humanos</h2>
                    <Link href="https://www.ohchr.org/es/ohchr_homepage" target="_blank" className="absolute flex items-center justify-center w-32 h-10 p-1 text-center text-white border rounded bottom-6 border-cyan-200 bg-cyan-600">
                        Visitar sitio<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </Link>
                </section>

                <section className="relative flex flex-col items-center justify-center p-8 text-justify rounded-lg shadow-lg" style={{width:"500px", height:"162px", backgroundColor:"rgba(197, 022, 087, 0.85)"}}>
                    <h2 className="absolute font-semibold text-white top-10">4. Declaración Universal de los Derechos Humanos</h2>
                    <Link href="https://www.ohchr.org/sites/default/files/documents/publications/guidingprinciplesbusinesshr_sp.pdf" target="_blank" className="absolute flex items-center justify-center w-32 h-10 text-center text-white bg-pink-800 border border-pink-200 rounded bottom-6">
                        Descargar<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </Link>
                </section>
            </main>
        </>
    )
}