"use client"
import { BackButton} from "../components/BackButton"
import { InfoCase } from "../components/InfoCase"
import { Footer } from "@/app/components/Footer"
import { Header } from "../components/Header"
import dynamic from 'next/dynamic';
import Image from "next/image";
import GestionDDHH from "@/app/assets/case1/case1-image3.jpg"
import Pasos from "@/app/assets/case1/case1-image4.jpg"
import Pilares from "@/app/assets/case1/pilares.png"
import { Activity1 } from "./components/Activity1";
import { Activity2 } from "./components/Activity2";
import ShimmerButton from "../components/magicui/shimmer-button";
import { useState } from "react";

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
    return(
        <>
        <main className="bordespagina">
            <header className="headerPage1">
                <BackButton/>
                <Header/>
                <InfoCase subtitle={"Conociendo los derechos humanos"}/>             
            </header>

            <hr className="hr-gradient"/>

            <section className="flex flex-col items-center justify-center mx-auto mb-4 text-justify" style={{width: "650px"}}>

                <h1 className="self-start my-4 text-2xl font-semibold cyan-gelco">Introducción</h1>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="self-start text-xl">
                ¿Puedes imaginar algo <span className="cyan-gelco">fundamental, innato y universal?</span>

                </p>

                <p className="text-xl">    
                    Algo <span className="cyan-gelco">tan vital</span> que reúne a 193 países, se traduce a más de 300 idiomas y afecta a más de 7 mil millones de personas.
                </p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="text-xl">
                    <span className="cyan-gelco">Algo que impacta no solo tu vida,</span> sino también la de todas las personas que conoces y amas... ¡e incluso aquellas que jamás has conocido!
                </p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="text-xl">
                Algo que nos permite construir una <span className="cyan-gelco">vida en común digna, satisfactoria e igualitaria,</span> ¿puedes imaginarlo?
                </p>

            </section>

            <section className="flex flex-col items-center justify-center mx-auto my-4 text-justify" style={{width: "770px"}}>
                <h1 className="self-start my-2 text-2xl font-semibold cyan-gelco">¿Qué son los derechos humanos?</h1>
                <p className="self-start mb-3">Mira este vídeo y descubre qué son los Derechos Humanos</p>

                <video controls className="w-full my-2">
                    <source src="/videos/derechos.mp4" type="video/mp4"></source>
                </video>
            </section>

            <hr className="my-10 hr-gradient"></hr>

            <section className="flex flex-col items-center justify-center mx-auto my-4 text-justify" style={{width: "800px"}}>
                <h1 className="self-start text-2xl font-semibold cyan-gelco">¿Cuál es la importancia de los derechos humanos?</h1>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-6 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>


                <p className="my-3 text-xl"><span className="font-semibold cyan-gelco">Los derechos humanos son universales e inalienables.</span> En todas partes del mundo, todas las personas tienen derecho a ellos. <span className="cyan-gelco">Nadie puede renunciar</span> voluntariamente a sus derechos. Y nadie puede arrebatárselos a otra persona.</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-6 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="my-3 text-xl"><span className="font-semibold cyan-gelco">Los derechos humanos son indivisibles.</span> Ya sean civiles, políticos, económicos, sociales o culturales, <span className="cyan-gelco">son inherentes a la dignidad de todas las personas.</span> Por consiguiente, todos comparten la misma condición como derechos. No hay derechos “pequeños”. En los derechos humanos no existen jerarquías.</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-6 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="my-3 text-xl"><span className="font-semibold cyan-gelco">Interdependencia e interrelación.</span> El cumplimiento de un derecho a menudo depende, total o parcialmente, del cumplimiento de otros derechos. Por ejemplo, el ejercicio efectivo del derecho a la salud puede depender del ejercicio efectivo del derecho a la educación o a la información.</p>

                <div style={{width: "700px"}} className="p-4 my-5 border rounded border-cyan-600 divide-solid active:border-pink-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="self-start mb-1 size-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>

                    <p>
                    La <span className="cyan-gelco">Declaración Universal de los Derechos Humanos y los diversos pactos internacionales</span> en este ámbito, te<span className="cyan-gelco"> reconocen ante el mundo como persona, respaldan tus derechos y defienden tus libertades,</span> sin importar tu género, raza, credo, nacionalidad o condición social. El solo hecho de ser persona <span className="cyan-gelco">te otorga a ti y a quienes te rodean, derechos y libertades fundamentales. </span>
                    </p>
                    <p className="my-2">Los Derechos Humanos <span className="cyan-gelco">son la base de los Objetivos de Desarrollo Sostenible de la Agenda 2030 de Naciones Unidas</span> para erradicar la pobreza, proteger el planeta y asegurar la prosperidad para todos.</p>
                </div>
            </section>


        <section className="flex flex-col mx-auto my-4 text-justify" style={{width: "800px"}}>
            <h1 className="self-start my-1 text-2xl font-semibold cyan-gelco">¿Cuáles son los derechos humanos?</h1>
            <p className="my-2 text-xl">La Declaración Universal de los Derechos Humanos, proclamada por la Asamblea General de las Naciones Unidas en París el 10 de diciembre de 1948, <span className="cyan-gelco">es un documento que marca un hito en la historia.</span> Pero recordemos, ¿cuáles son en detalle los Derechos Humanos que existen? ¿y cómo se clasifican? <span className="cyan-gelco">Existen tres categorías:</span></p>
            <DynamicCarousel/>
        </section>


        <section className="flex flex-col items-center justify-center mx-auto my-4 text-justify" style={{width: "800px"}}>
            <h1 className="self-start my-2 text-2xl font-semibold cyan-gelco">La gestión de los DDHH en Gelco</h1>
            <p className="text-xl">El siguiente diagrama representa el ciclo de mejoramiento continuo de la gestión de los Derechos Humanos en Gelco:</p>
            <Image src={GestionDDHH} alt="Ciclo de Gestión de los DDHH" className="my-3"/>

            <p className="my-4 text-xl">Los <i>Principios Rectores</i> sobre <i>Empresas y Derechos Humanos</i> establecen 3 pasos para que las empresas han de llevar a cabo para respetar los derechos humanos en sus actividades:</p>

            <Image src={Pasos} alt="Pasos a seguir para respetar los DDHH" className="my-2"/>

            <ol className="my-4 text-xl list-decimal">
                <li className="my-1 list-item">La creación de una <span className="cyan-gelco">Política de Compromiso con los Derechos Humanos,</span> que sirva de base al proceso de integración del marco;</li>
                <li className="my-1 list-item">La <span className="cyan-gelco">identificación, mitigación y prevención</span> de sus potenciales impactos sobre los derechos humanos, a través de un proceso de debida diligencia;</li>
                <li className="my-1 list-item">El <span className="cyan-gelco">establecimiento de mecanismos de reclamación</span> a nivel operacional, para dar solución a los impactos generados y reparar a las víctimas.</li>
            </ol>

        </section>

        <section className="flex flex-col items-center mx-auto my-6 overflow-hidden text-justify" style={{width: "800px"}}>
            <h1 className="self-start my-1 text-2xl font-semibold cyan-gelco">Actividades</h1>
            <p className="self-start text-xl">Pon en práctica lo aprendido, realizando las siguientes actividades</p>
            <div className="flex items-center justify-center my-2">
                <div id="activity1button" onClick={showActivity1}>
                    <ShimmerButton>Actividad 1</ShimmerButton>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="mx-4 size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                <div id="activity2button" onClick={showActivity2}>
                    <ShimmerButton>Actividad 2</ShimmerButton>
                </div>

            </div>
            <div id="activity1" hidden={visibleActivity !== 'activity1'}>
                <Activity1/>
            </div>
            <div id="activity2" hidden={visibleActivity !== 'activity2'}>
                <Activity2/>
            </div>
        </section>

        <section className="flex flex-col items-center mx-auto my-6 overflow-hidden text-justify" style={{width: "800px"}}>
            <h1 className="self-start text-2xl font-semibold cyan-gelco">Principios rectores sobre las empresas y derechos humanos</h1>
            <p className="my-1 text-xl">Los Principios Rectores sobre Empresas y Derechos Humanos <span className="cyan-gelco">se aprobaron en el año 2011.</span>  Estos principios establecen que la responsabilidad empresarial de respetar los derechos humanos se aplica a
                <span className="cyan-gelco"> cualquier tipo de entidad,</span> independientemente de su tamaño, sector o contexto operacional. Y también especifica que las empresas han de cumplir todas las leyes aplicables y respetar los derechos humanos, dondequiera que operen.
            </p>
            <p className="my-2 text-xl">Los Principios Rectores sobre las Empresas y los Derechos Humanos de las Naciones Unidas (PRNU) de 2011, también conocidos como Principios Rectores, son un instrumento internacional que <span className="cyan-gelco">está compuesto por 3 pilares y 31 principios.</span></p>
            <Image src={Pilares} alt="Nothing" className="my-1"/>
        </section>

        <Footer/>
        </main>

        </>
    )
}