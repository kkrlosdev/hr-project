"use client"
// Components
import { Footer } from "@/app/components/Footer"
import { Activity1 } from "./components/Activity1";
import { Activity2 } from "./components/Activity2";
import ShimmerButton from "../components/magicui/shimmer-button";
import TypingAnimation from "../components/magicui/typing-animation"
import HeroVideoDialog from "../components/magicui/hero-video-dialog"
import NavDock from "../components/Dock"
// Next Components
import Image from "next/image";
import dynamic from 'next/dynamic';
// Image Imports
import GestionDDHH from "@/app/assets/case1/case1-image3.webp"
import Pasos from "@/app/assets/case1/case1-image4.webp"
import DDHH from "@/app/assets/case3/case3-image1.webp"
// React Components
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners"

const DynamicCarousel = dynamic(() => import('@/app/components/Carousel'), { ssr: false });

export default function Case1(){
    const [visibleActivity, setVisibleActivity] = useState('activity1');

    const showActivity1 = () => {
        if (visibleActivity !== 'activity1') {
            setVisibleActivity('activity1');
        }}
    const showActivity2 = () => {
        if (visibleActivity !== 'activity2') {
            setVisibleActivity('activity2');
        }}

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 700);
    }, []);
    return(
        <>
        {isLoading ? (
            <div className="full-screen-loader">
                <ClipLoader size={100} color={"#1805C5"} loading={isLoading} />
            </div>
        ):(
            <>
        <main>
            <header className="headerPage1">
                <TypingAnimation className="text-white font-bold text-[2.7em] absolute top-[35%] left-2 drop-shadow-md" duration={40}>¿Quieres saber más sobre Derechos Humanos?</TypingAnimation>
                <TypingAnimation className="text-white font-bold text-[2.7em] absolute top-[45%] left-2 drop-shadow-md" duration={40} delay={40}>¡Desliza hacia abajo y entérate de muchas cosas!</TypingAnimation>
            </header>

            <NavDock/>

            <section className="h-[70dvh] w-full bg-white flex">
                <article className="w-[50%]">
                    <h1 className="mt-8 ml-8 text-2xl font-semibold blue-gelco">
                        Introducción
                    </h1>
                    <p className="mt-2 ml-8 text-base">
                    ¿Puedes imaginar <span className="blue-gelco">algo fundamental, innato y universal? <br></br></span>
                    Algo tan vital que reúne a 193 países, se traduce a más de 300 idiomas y afecta a más de 7 mil millones de personas.
                    </p>
                    <p className="mt-6 ml-8 text-base">
                        <span className="blue-gelco">Algo que impacta no solo tu vida</span>, sino también la de todas las personas que conoces y amas... ¡e incluso aquellas que jamás has conocido!
                    </p>
                    <p className="mt-6 ml-8 text-base">
                        Algo que nos permite <span className="blue-gelco">construir una vida en común digna, satisfactoria e igualitaria</span>, ¿puedes imaginarlo?
                    </p>
                    <p className="mt-6 ml-8 text-base">
                    La respuesta está en nuestros<span className="blue-gelco"> Derechos Humanos</span>, principios que nos protegen y nos recuerdan el valor inherente de cada persona, sin importar fronteras ni diferencias.
                    </p>
                </article>

                <div className="grid w-[40%] h-[100%] grid-cols-5 grid-rows-5 gap-6 p-4 mx-auto mt-4" id="section2case1">
                    <Image
                        src="/assets/debida_diligencia.webp"
                        alt="Imagen 1"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full col-span-2 row-span-3 rounded-lg"
                    />
                    <Image
                        src="/assets/image123.jpg"
                        alt="Imagen 2"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full col-span-5 col-start-1 row-span-2 row-start-4 rounded-lg"
                    />
                    <Image
                        src="/assets/case3-background.webp"
                        alt="Imagen 3"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full col-span-3 col-start-3 row-span-3 row-start-1 rounded-lg"
                    />
                    </div>
            </section>

            <section className="h-[100dvh] mt-12 w-full bg-white flex gap-1">
                <article className="w-[50%]">
                    <h1 className="mt-8 ml-8 text-2xl font-semibold blue-gelco">
                        ¿Qué son los derechos humanos?
                    </h1>
                    <HeroVideoDialog
                        className="block mt-4 ml-8 dark:hidden"
                        animationStyle="top-in-bottom-out"
                        videoSrc="/videos/derechos.mp4"
                        thumbnailSrc="/assets/vid_preview.png"
                        thumbnailAlt="Hero Video"
                    />
                </article>
                <article className="w-[50%]">
                    <h1 className="mt-8 ml-8 text-2xl font-semibold blue-gelco">
                        La importancia de los Derechos Humanos
                    </h1>
                    <p className="mx-8 mt-4 text-pretty">
                        <span className="blue-gelco">Los derechos humanos son universales e inalienables.</span> En todas partes del mundo, todas las personas tienen derecho a ellos. Nadie puede renunciar voluntariamente a sus derechos. Y nadie puede arrebatárselos a otra persona.
                    </p>
                    <p className="mx-8 mt-6 text-pretty">
                        <span className="blue-gelco">Los derechos humanos son indivisibles.</span> Ya sean civiles, políticos, económicos, sociales o culturales, son inherentes a la dignidad de todas las personas. Por consiguiente, todos comparten la misma condición como derechos. No hay derechos “pequeños”. En los derechos humanos no existen jerarquías.
                    </p>
                    <p className="mx-8 mt-6 text-pretty">
                        <span className="blue-gelco">Interdependencia e interrelación</span>. El cumplimiento de un derecho a menudo depende, total o parcialmente, del cumplimiento de otros derechos. Por ejemplo, el ejercicio efectivo del derecho a la salud puede depender del ejercicio efectivo del derecho a la educación o a la información.
                    </p>
                </article>
            </section>

            <section className="w-[95%] mx-auto">
                <DynamicCarousel/>
            </section>

            <h1 className="my-4 text-2xl font-semibold text-center blue-gelco">Principios rectores sobre las empresas y derechos humanos</h1>

            <section className="h-[80dvh] bg-blue-gelco flex text-white text-justify items-center">
                <article className="w-[50%] flex flex-col justify-center items-center px-12">
                    <p className="mb-6"> 
                        Los Principios Rectores sobre Empresas y Derechos Humanos se aprobaron en el año 2011.
                    </p>
                    <p className="mb-6">
                        Estos principios establecen que la responsabilidad empresarial de respetar los derechos humanos se aplica a cualquier tipo de entidad, independientemente de su tamaño, sector o contexto operacional. Y también especifica que las empresas han de cumplir todas las leyes aplicables y respetar los derechos humanos, dondequiera que operen.
                    </p>
                    <p>
                        Los Principios Rectores sobre las Empresas y los Derechos Humanos de las Naciones Unidas (PRNU) de 2011, también conocidos como Principios Rectores, son un instrumento internacional que está compuesto por 3 pilares y 31 principios.
                    </p>
                </article>
                <article className="w-[50%] mx-8">
                    <Image src="/assets/image123.jpg" width={800} height={800} alt="Imagen" className="rounded-md" />
                </article>
            </section>

            <section className="h-[80dvh] w-[90%] mx-auto justify-center items-center flex">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla tincidunt pharetra. Nam dapibus est in dolor dignissim aliquet. Sed cursus, ante placerat cursus hendrerit, nulla augue laoreet enim, id semper neque diam quis velit. Donec nec tellus a eros euismod vulputate eget quis dui. Etiam nisl massa, luctus in porta et, porttitor a magna. Donec euismod in ligula sed faucibus. Sed in massa ornare, aliquet velit ac, pellentesque diam. Donec sapien nulla, condimentum lacinia lorem in, aliquam facilisis nulla. Donec cursus.
                </p>
                <Image src={DDHH} width={400} height={400} alt="Imagen" className="mx-8 rounded-md" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla tincidunt pharetra. Nam dapibus est in dolor dignissim aliquet. Sed cursus, ante placerat cursus hendrerit, nulla augue laoreet enim, id semper neque diam quis velit. Donec nec tellus a eros euismod vulputate eget quis dui. Etiam nisl massa, luctus in porta et, porttitor a magna. Donec euismod in ligula sed faucibus. Sed in massa ornare, aliquet velit ac, pellentesque diam. Donec sapien nulla, condimentum lacinia lorem in, aliquam facilisis nulla. Donec cursus.
                </p>
            </section>

            <section className="h-[80dvh] bg-blue-gelco text-white pt-4">
                <h1 className="text-2xl font-semibold text-center">La gestión de los DDHH en Gelco</h1>
                <p className="my-4 text-center">El siguiente diagrama representa el ciclo de mejoramiento continuo de la gestión de los Derechos Humanos en Gelco:</p>
                <Image src={GestionDDHH} alt="Imagen Gestion DDHH" height={500} width={500} className="mx-auto rounded-md"/>
            </section>

            <section className="h-[90dvh]">
                <p className="my-4 w-[90%] mx-auto text-justify">Los Principios Rectores sobre Empresas y Derechos Humanos <span className="blue-gelco">establecen 3 pasos</span> que las empresas han de llevar a cabo para respetar los derechos humanos en sus actividades:</p>
                <Image src={Pasos} alt="Pasos DDHH" height={800} width={800} className="mx-auto"/>
                <p className="mx-auto text-justify w-[90%] mt-4">La creación de una <span className="blue-gelco">Política de Compromiso con los Derechos Humanos</span>, que sirva de base al proceso de integración del marco;</p>
                <p className="mx-auto text-justify w-[90%] my-2">La <span className="blue-gelco">identificación, mitigación y prevención</span> de sus potenciales impactos sobre los derechos humanos, a través de un proceso de debida diligencia;</p>
                <p className="mx-auto text-justify w-[90%]">El <span className="blue-gelco">establecimiento de mecanismos de reclamación</span> a nivel operacional, para dar solución a los impactos generados y reparar a las víctimas.</p>
            </section>

            <section className="flex flex-col items-center mx-auto overflow-hidden text-justify" style={{width: "800px"}}>
                <h1 className="self-start my-1 text-xl font-semibold blue-gelco">Actividades</h1>
                <p className="self-start text-base">Pon en práctica lo aprendido, realizando las siguientes actividades</p>
                <div className="flex items-center justify-center my-2">
                    <div id="activity1button" onClick={showActivity1}>
                        <ShimmerButton background="rgb(39, 0, 137)">Actividad 1</ShimmerButton>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="mx-4 size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    <div id="activity2button" onClick={showActivity2}>
                        <ShimmerButton background="rgb(39, 0, 137)">Actividad 2</ShimmerButton>
                    </div>

                </div>
                <div id="activity1" hidden={visibleActivity !== 'activity1'}>
                    <Activity1/>
                </div>
                <div id="activity2" hidden={visibleActivity !== 'activity2'}>
                    <Activity2/>
                </div>
            </section>

        <Footer/>
        </main>

        </>
        )}
        </>
    )
}