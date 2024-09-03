"use client"
// Next Components
import Image from "next/image"
// Image Imports
import { Logo } from "../components/Logo"
import derechos_humanos_card from "@/app/assets/derechos_humanos.svg"
import debida_diligencia_card from "@/app/assets/debida_diligencia.svg"
import remediacion_card from "@/app/assets/remediacion.webp"
// React Components
import { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners"
// Components
import { CaseComponent } from "../components/CasesComponent"

export default function Cases(){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 700);
    }, []);

    return (
        <>
        {isLoading ? (
            <div className="full-screen-loader">
                <ClipLoader size={100} color={"#1805C5"} loading={isLoading} />
            </div>
        ):(
            <>
            <header>
                <Logo />
                <h1 className="my-1 ml-4 font-sans text-3xl blue-gelco">DERECHOS <span className="block mt-0">HUMANOS</span> </h1>
                <video muted autoPlay loop className="absolute top-0 left-0 object-cover w-full h-full -z-10">
                    <source src="/videos/background-video2.mp4" type="video/mp4"></source>
                </video>
            </header>

            <main className="flex flex-col justify-center md:flex-row lg:flex-row xl:flex-row 2xl:flex-row space-x-36">
                
                <CaseComponent title="Caso 1" titleColor="blue-gelco" subtitle="Derechos humanos" redirect="/case1" resourcesLink="/case1/resources" knowMoreColor="bg-blue-gelco" backgroundColor="bg-blue-gelco">
                    <div className="absolute bottom-2 right-2" style={{height:'220px'}}>
                        <Image src={derechos_humanos_card} alt="Derechos humanos" className="object-contain w-full h-full"/>
                    </div>
                </CaseComponent>

                <CaseComponent title="Caso 2" titleColor="pink-gelco" subtitle="Debida diligencia" redirect="/case2" resourcesLink="/case2/resources" knowMoreColor="bg-pink-gelco" backgroundColor="bg-pink-gelco">
                    <Image className="mt-12 ml-4" src={debida_diligencia_card} alt="Debida Diligencia" width={240} height={100}/>
                </CaseComponent>

                <CaseComponent title="Caso 3" titleColor="cyan-gelco" subtitle="Remediación" redirect="/case3" resourcesLink="/case3/resources" knowMoreColor="bg-cyan-gelco" backgroundColor="bg-cyan-gelco">
                    <Image className="mt-5 ml-6" src={remediacion_card} alt="Remediación" width={250} height={100}/>
                </CaseComponent>
            </main>
        </>
        )}
        </>
    )
}