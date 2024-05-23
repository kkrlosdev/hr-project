"use client"
import { useEffect } from "react"
import { BackButton } from "../components/BackButton"
import { InfoCase } from "../components/InfoCase"
import Image from "next/image"
import Image1Case3 from "@/app/assets/case3-image1.jpg"
import { Delicious_Handrawn } from "next/font/google"

export default function Case1(){
    useEffect(() => {
        const Box1 = document.getElementById("DefAndFunc");
        const text1 = document.getElementById("text-1");

        const toggleVisibility = () => {
            if (text1.hasAttribute("hidden")) {
                text1.removeAttribute("hidden");
            } else {
                text1.setAttribute("hidden", "");
            }
        };
        if (Box1) {
            Box1.addEventListener("click", toggleVisibility);
        }
        return () => {
            if (Box1) {
                Box1.removeEventListener("click", toggleVisibility);
            }
        };
    }, []);

    return(
        <>
            <header className="headerPage3">
                <BackButton/>
                <InfoCase subtitle={"Remediación"}/>
            </header>

            <hr className="hr-gradient"/>

            <section className="flex flex-col items-center justify-center mx-auto mb-4 text-justify" style={{width: "650px"}}>
                <h1 className="self-start my-2 text-3xl font-semibold cyan-gelco">Introducción</h1>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="text-xl">El <span className="cyan-gelco">tercer principio rector</span> sobre las Empresas y Derechos Humanos obliga a Estados y Empresas a <span className="cyan-gelco">establecer mecanismos de reparación o de remediación.</span></p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="text-xl"><span className="cyan-gelco">Estos mecanismos se diseñan </span>para hacer frente a las <span className="cyan-gelco">consecuencias negativas causadas </span>por nuestra actividad o la de nuestros socios o contratistas.</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="text-xl">Para ello, <span className="cyan-gelco">las empresas ponen a disposición de los afectados mecanismos de reclamación </span>que permiten hacer llegar sus quejas o inquietudes. De este modo, se puede reparar el daño causado a nuestras comunidades, empleados y cadena de valor.</p>
                <p className="mt-1 text-xl">Los Estados, por su parte, <span className="cyan-gelco">deben garantizar que los afectados tienen acceso a mecanismos de reparación judiciales y extrajudiciales.</span></p>
            </section>

            <section className="flex flex-col items-center justify-center mx-auto my-10 text-justify" style={{width: "770px"}}>
                <h1 className="self-start mt-10 mb-4 text-2xl font-semibold cyan-gelco">Los mecanismos de remediación</h1>
                <p className="text-xl">El proceso de Debida Diligencia nos ayuda a reducir el riesgo de afectar a nuestro entorno. En ocasiones, incluso con un proceso robusto, se producen consecuencias negativas en los Derechos Humanos que debemos abordar.</p>

                <p className="mt-1 text-xl cyan-gelco">En virtud de nuestra responsabilidad de respetar los Derechos Humanos, debemos remediar o reparar ese tipo de situaciones, ya sea por nosotros mismos o en cooperación con otros actores.</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <h1 className="self-start text-2xl font-semibold cyan-gelco">Rol del estado</h1>

                <p className="my-2 text-xl">Los estados deben <span className="cyan-gelco">tomar medidas apropiadas</span> para garantizar que cuando se produzcan abusos de Derechos Humanos en su territorio y/o jurisdicción, los afectados puedan acceder a mecanismos de reparación eficaces, ya sean judiciales o extrajudiciales.</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <h1 className="self-start text-2xl font-semibold cyan-gelco">Tipos de reparación</h1>
                <p className="my-2 text-xl">La remediación <span className="cyan-gelco">puede incluir disculpas, restitución, rehabilitación, compensaciones (económicas o no) y sanciones,</span> así como medidas de prevención de nuevos daños como, por ejemplo,<span className="cyan-gelco"> la garantía de no repetición.</span></p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <h1 className="self-start text-2xl font-semibold cyan-gelco">Características</h1>
                <p className="my-2 text-xl">Los procedimientos de remediación <span className="cyan-gelco">deben ser imparciales</span> y estar <span className="cyan-gelco">protegidos contra toda forma de corrupción</span> o cualquier intento de influir en su resultado.</p>

            </section>

        <hr className="my-10" style={{height: "5px", border: "none", backgroundImage: "linear-gradient(to right, rgb(052, 044, 125), rgb(197, 022, 087))"}}></hr>


            <section className="flex flex-col items-center justify-center p-4 mx-auto mb-4 text-justify" style={{width: "790px"}}>
                <h1 className="self-start text-2xl font-semibold cyan-gelco">Mecanismos de reclamación estatales</h1>

                <p className="mt-4 text-xl">El término de mecanismo de reclamaciones incluye cualquier proceso que permita <span className="cyan-gelco">plantear reclamaciones y reparar violaciones de los Derechos Humanos</span> relacionadas con actividades empresariales.</p>
                <Image src={Image1Case3} alt="Hola" height={290} width={280}/>
                <p className="my-2 text-xl">Estos mecanismos y la manera en que se puede acceder a ellos deben ser conocidos plenamente por los potenciales afectados. En caso contrario, el estado debe brindar asistencia para ello.</p>
                <p className="my-2 text-xl">Los mecanismos estatales de reclamación, tanto judiciales como extrajudiciales, deben <span className="cyan-gelco">constituir la base de un sistema más amplio de reparación.</span> Complementariamente, los mecanismos a nivel operacional que implantan las empresas, ofrecen recursos y soluciones de fase temprana.</p>

                <div style={{width: "700px"}} className="p-4 my-5 border rounded border-cyan-600 divide-solid active:border-pink-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="self-start mb-1 size-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>

                    <p>Quienes pertenecen a grupos o poblaciones expuestas a un mayor riesgo de vulnerabilidad o marginación <span className="cyan-gelco">pueden enfrentar obstáculos culturales, sociales, físicos y financieros adicionales</span> para acceder a estos mecanismos.
                        <span className="cyan-gelco"> El estado no debe levantar barreras que impidan llevar casos legítimos ante los tribunales.</span>
                    </p>
                </div>
            </section>

        <hr className="my-10" style={{height: "5px", border: "none", backgroundImage: "linear-gradient(to right, rgb(052, 044, 125), rgb(197, 022, 087))"}}></hr>

        <section className="flex flex-col items-center justify-center mx-auto my-10 text-justify" style={{width: "750px"}}>
            <h1 className="self-start my-2 text-2xl font-semibold cyan-gelco">Mecanismos de reclamación a nivel operacional</h1>
            <p className="text-xl">Los mecanismos de reclamación a nivel operacional contribuyen a la responsabilidad de respetar los Derechos Humanos por parte de las empresas y retroalimentan el proceso de Debida Diligencia.</p>

            <div className="flex items-center w-full h-20 gap-4 my-4 rounded-md shadow-xl bg-cyan-gelco hover:cursor-pointer" id="DefAndFunc">
                <button className="ml-4">
                    <svg id="Svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                    </svg>
                </button>
                <p className="text-xl text-white">Definición y funciones</p>
            </div>

            <div hidden id="text-1" style={{width: "680px"}} className="p-4 border rounded">
                <p className="text-xl">
                    <span className="cyan-gelco">Diseñamos los mecanismos de reclamación en colaboración con nuestros socios y otros stakeholders.</span> Nos comprometemos a verificar cualquier denuncia o queja recibida y cooperar activamente para reparar el daño causado por nuestra actividad o la de nuestros contratistas. <br/>
                    <span className="cyan-gelco"> Nuestros relacionadores comunitarios son una pieza fundamental</span> para recabar discrepancias de forma incipiente, pues construyen el diálogo y la confianza al acercarse proactivamente a las comunidades en busca de su feedback sobre los impactos que la operación produce en el entorno.
                    Todo ello permite anticiparnos, dar respuesta a incidentes menores derivados de nuestras actividades antes de que escalen y proporcionar una vía temprana de reparación a las partes afectadas.
                    Las dos principales funciones de estos mecanismos son:
                </p>

                <div className="p-1 mt-2 border rounded">
                    <h1 className="flex items-center justify-center text-xl text-center text-white bg-cyan-gelco h-14">Identificación de impactos</h1>
                    <p className="my-2 text-xl">Contribuir a <span className="cyan-gelco">determinar los impactos sobre los Derechos Humanos</span> y ofrecer un cauce para que las personas directamente afectadas por las operaciones expresen su preocupación, sin miedo a represalias, en el contexto de un entorno de comprensión y respeto de los Derechos Humanos.
                        Las reclamaciones recibidas pueden provenir de nuestros propios mecanismos de reclamación o de cualquier otra vía judicial o extrajudicial.</p>
                </div>

                <div className="p-1 border rounded">
                    <h1 className="flex items-center justify-center text-xl text-center text-white bg-cyan-gelco h-14">Detección temprana</h1>
                    <p className="my-2 text-xl">Permitir que la compañía <span className="cyan-gelco">se ocupe de los daños detectados y repare las consecuencias</span> de forma temprana y directa, ayudándonos a prevenir riesgos sociales incipientes.</p>
                </div>

            </div>

            <div className="flex items-center w-full h-20 gap-4 my-4 rounded-lg shadow-xl bg-cyan-gelco hover:cursor-pointer">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="ml-4 size-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                    </svg>

                <p className="text-xl text-white">Características principales</p>
            </div>

        </section>

        <section className="flex flex-col items-center justify-center mx-auto my-10 text-justify" style={{width: "750px"}}>
            <h1 className="self-start text-2xl font-semibold cyan-gelco">Mecanismos de reclamación de Gelco</h1>
            <video controls className="w-full my-2">
                <source src="/videos/derechos.mp4" type="video/mp4"></source>
            </video>
        </section>
        </>
    )
}