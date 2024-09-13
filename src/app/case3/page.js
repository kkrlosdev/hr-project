"use client"
// React Components
import { ClipLoader } from "react-spinners"
import { useEffect, useState } from "react"
// Components
import { BackButton } from "../components/BackButton"
import { InfoCase } from "../components/InfoCase"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Activity1 } from "./components/activities/Activity1"
import { Activity2 } from "./components/activities/Activity2"
import { SectionComponent } from "../components/SectionComponent"
import ShimmerButton from "../components/magicui/shimmer-button"
// Next Components
import Image from "next/image"
import Link from "next/link"
// Image Imports
import Image1Case3 from "@/app/assets/case3/case3-image1.webp"
import LineaEtica from "@/app/assets/case3/case3-image2.webp"
import Cocola from "@/app/assets/case3/Cocola.webp"
import LineaVerde from "@/app/assets/case3/LineaVerde.webp"
import QRCocola from '@/app/case3/components/QRCocola'

export default function Case3(){
    const [visibility, setVisibility] = useState({
        text1: false,
        text2: false,
    });
    const handleToggleVisibility = (id) => {
        setVisibility(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

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
        {isLoading?(
            <div className="full-screen-loader">
                <ClipLoader size={100} color={"#1805C5"} loading={isLoading} />
            </div>
        ):(
            <>
            <main className="bordespagina">
                <header className="headerPage3">
                    <Header/>
                    <BackButton/>
                    <InfoCase subtitle={"Remediación"}/>
                </header>

                <hr className="hr-gradient"/>

                <SectionComponent title="Introducción" width="650px">
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
                </SectionComponent>

                <SectionComponent title="Los mecanismos de remediación">
                    <p className="mt-3 text-xl">Estamos <span className="cyan-gelco">comprometidos a crear un ambiente de trabajo propio y de nuestros grupos de interés</span> que fomente la visibilización, el apoyo y la apertura de la comunicación hacia el respeto de los Derechos Humanos.  Cuando se hace necesario, buscamos significado y consulta con expertos externos, incluidos los críticos y líderes de pensamiento reconocidos en materia de derechos humanos</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>

                    <h1 className="self-start text-2xl font-semibold cyan-gelco">Rol del estado</h1>

                    <p className="my-2 text-xl">Nos esforzamos por <span className="cyan-gelco">trabajar cooperativamente con nuestro gobierno y organizaciones de la sociedad civil</span> para avanzar en la solución de los problemas. Buscamos comprender la naturaleza y el contexto de la evolución del camino hacia los derechos humanos y cómo podemos marcar la diferencia. </p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>

                    <h1 className="self-start text-2xl font-semibold cyan-gelco">Tipos de reparación</h1>
                    <p className="my-2 text-xl">La remediación <span className="cyan-gelco">puede incluir disculpas, restitución, rehabilitación, compensaciones (económicas o no) y sanciones,</span> así como medidas de prevención de nuevos daños como, por ejemplo,<span className="cyan-gelco"> la garantía de no repetición.</span></p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>

                    <h1 className="self-start text-2xl font-semibold cyan-gelco">Características</h1>
                    <p className="my-2 text-xl">Los procedimientos de remediación <span className="cyan-gelco">deben ser imparciales, transparentes y efectivos</span> y estar <span className="cyan-gelco">protegidos contra toda forma de corrupción</span> o cualquier intento de influir en su resultado.</p>

                </SectionComponent>

            <hr className="my-10 hr-gradient"></hr>

                <SectionComponent title="Mecanismos de reclamación estatales">
                    <p className="mt-4 text-xl">El término de mecanismo de reclamaciones incluye cualquier proceso que permita <span className="cyan-gelco">plantear reclamaciones y reparar violaciones de los Derechos Humanos</span> relacionadas con actividades empresariales.</p>
                    <Image src={Image1Case3} alt="Imagen ilustrativa DDHH" height={290} width={280}/>
                    <p className="my-2 text-xl">Estos mecanismos y la manera en que se puede acceder a ellos deben ser conocidos plenamente por los potenciales afectados. En caso contrario, el estado debe brindar asistencia para ello.</p>
                    <p className="my-2 text-xl">Los mecanismos estatales de reclamación, tanto judiciales como extrajudiciales, deben <span className="cyan-gelco">constituir la base de un sistema más amplio de reparación.</span> Complementariamente, los mecanismos a nivel operacional que implantan las empresas, ofrecen recursos y soluciones de fase temprana.</p>

                    <div style={{width: "700px"}} className="p-4 my-5 border rounded-2xl border-cyan-600 divide-solid">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="self-start mb-1 stroke-cyan size-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>

                        <p>Quienes pertenecen a grupos o poblaciones expuestas a un mayor riesgo de vulnerabilidad o marginación <span className="cyan-gelco">pueden enfrentar obstáculos culturales, sociales, físicos y financieros adicionales</span> para acceder a estos mecanismos.
                            <span className="cyan-gelco"> El estado no debe levantar barreras que impidan llevar casos legítimos ante los tribunales.</span>
                        </p>
                    </div>
                </SectionComponent>

            <hr className="my-5 hr-gradient"></hr>

        <SectionComponent title="Mecanismos de reclamación a nivel operacional" width="750px">
                <p className="mt-1 text-xl">Los mecanismos de reclamación a nivel operacional contribuyen a la responsabilidad de respetar los Derechos Humanos por parte de las empresas y retroalimentan el proceso de Debida Diligencia.</p>                
                <div className="flex items-center w-full h-20 gap-4 my-4 rounded-lg shadow-xl bg-cyan-gelco hover:cursor-pointer" id="DefAndFunc" onClick={() => handleToggleVisibility('text1')}>
                    <button className="ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <p className="text-xl text-white">Definición y funciones</p>
                </div>

                <div id="text1" style={{width: "680px"}} className={`p-4 border rounded ${visibility.text1 ? '' : 'hidden'}`}>
                    <p className="text-xl">
                        Para atender denuncias por afectaciones a los Derechos Humanos, Gelco <span className="cyan-gelco">cuenta con mecanismos accesibles para la recepción de peticiones, quejas y reclamos,</span> que permiten atender y resolver de manera oportuna, transparente y eficaz las denuncias relacionadas con la operación. Estos mecanismos son supervisados por la alta dirección a través de informes periódicos de rendición de cuentas por su funcionamiento.  Además, <span className="cyan-gelco">se realizan valoraciones de la opinión de los usuarios</span> sobre los mecanismos de reclamación para su mantenimiento y mejora.
                    </p>
                    <p className="mt-1 text-xl">
                    Además de los mecanismos internos, Gelco reconoce la legitimidad de los mecanismos institucionales establecidos por la ley para que cualquier persona interponga quejas o denuncias en materia de Derechos Humanos, cuando considere que la operación lo impacta negativamente
                    </p>
                </div>

                <div className="flex items-center w-full h-20 gap-4 my-4 rounded-lg shadow-xl bg-cyan-gelco hover:cursor-pointer" id="MainFeatures" onClick={() => handleToggleVisibility('text2')}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="ml-4 size-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                        </svg>

                    <p className="text-xl text-white">Características principales</p>
                </div>

                <div id="text2" style={{width: "680px"}} className={`p-4 border rounded ${visibility.text2 ? '' : 'hidden'}`}>
                    <p className="text-xl">Los mecanismos de reclamación se deben caracterizar por ser:</p>
                    <ol className="ml-4 list-disc">
                        <li className="text-xl list-item"><span className="cyan-gelco">Oportunos</span></li>
                        <li className="text-xl list-item"><span className="cyan-gelco">Transparentes</span></li>
                        <li className="text-xl list-item"><span className="cyan-gelco">Eficaces</span></li>
                    </ol>
                    <p className="text-xl">Además, no se debe privar a ninguna persona de poder interponer quejas o denuncias en Materia de Derechos Humanos, cuando considere que la operación impacta negativamente.</p>
                </div>

                <div>
                    <h1 className="self-start my-2 text-2xl font-semibold cyan-gelco">Línea ética</h1>
                    <p className="text-xl">Es un mecanismo administrado por un tercero en el que cualquier persona interna o externa a la organización <span className="cyan-gelco">puede presentar quejas o denuncias</span> incluso anónimas, relacionadas con eventos de fraude/corrupción o conductas contrarias al código de ética, mediante los siguientes canales:</p>
                    <Image src={LineaEtica} alt="Línea ética" width={800} height={300} className="my-4"/>
                    <p className="text-xl">Se puede acceder directamente a través de los enlaces indicados o, a través de nuestra página web <Link target="_blank" href="https://www.gelcointernational.com/contacto/" className="underline cyan-gelco">gelcointernational.com</Link> en la sección <span className="cyan-gelco">Contáctenos &gt; Línea Ética &gt; Planta Barranquilla</span></p>
                    <p className="mt-2 text-xl">Los tipos de incidentes asociados con DDHH que se pueden reportar por este canal (entre otros temas relacionados relacionados con el manual de ética y transparencia) son:</p>
                    <ul className="p-5 mt-1 text-xl list-disc">
                        <li className="list-item">Violencia o amenaza</li>
                        <li className="list-item">Violación de derechos humanos, derechos laborales o privacidad de datos</li>
                        <li className="list-item">Discriminación o acoso</li>
                        <li className="list-item">Contaminación al ambiente</li>
                        <li className="list-item">Afectación a la salud de los trabajadores</li>
                    </ul>
                    <div>
                        <h2 className="self-start text-2xl font-semibold cyan-gelco">Comité de convivencia laboral (COCOLA)</h2>
                        <p className="my-1 text-xl">
                            Conjunto de personas, con representación de la empresa y de los trabajadores, que <span className="cyan-gelco">se encargan de recibir y dar trámite a las quejas presentadas</span> en las que se describan situaciones que puedan constituir acoso laboral, de acuerdo con lo definido en la Ley 1010 de 2006.
                        </p>
                        <p className="my-1 text-xl">
                            Por este mecanismo <span className="cyan-gelco">no se aceptan quejas o denuncias anónimas.</span> Toda queja al comité de convivencia deberá presentarse por escrito, a través del formato SS-RG-30, el cual puede ser solicitado en medio impreso a cualquier miembro del comité o diligenciarse en formato electrónico, al cual se puede acceder a través del siguiente enlace o código QR:
                        </p>
                        <div className="flex items-center justify-center">
                            <Link href="https://forms.office.com/r/pkh1QJ4fbj?origin=lprLink" target="_blank"><Image src={Cocola} alt="Contacto Cocola" className=" w-[35rem] h-[7.5rem] mt-5"/></Link>
                            <QRCocola />
                        </div>
                        <p className="my-2 text-xl">
                        La queja debe presentarse en un plazo <span className="cyan-gelco">no superior a los seis (6) meses</span> después de que hayan ocurrido los hechos y debe indicarse claramente la fecha de los eventos, motivo de la queja y suministrar evidencias siempre que sea posible.  Toda la información suministrada y la que se derive del tratamiento del caso será tratada de manera confidencial por el COCOLA, con conocimiento de Gestión Humana y la Gerencia de Operaciones.
                        </p>
                    </div>
                    <div>
                        <h2 className="self-start my-2 text-2xl font-semibold cyan-gelco">Línea verde</h2>
                        <p className="text-xl">
                            A través de esta serie de mecanismos se pueden enviar preguntas, quejas, reclamos o solicitudes relacionadas con el desempeño ambiental de la empresa:
                        </p>
                        <Image src={LineaVerde} alt="Línea Verde" className="my-2 ml-8"/>
                    </div>
                </div>
            </SectionComponent>

            <SectionComponent title="Mecanismos de reclamación de Gelco" width="750px">
                <video controls className="w-full my-2">
                    <source src="/videos/derechos.mp4" type="video/mp4"></source>
                </video>
            </SectionComponent>

            <div className="mb-4">
                <SectionComponent title="Actividades" width="800px">
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
                </SectionComponent>
            </div>

            <Footer/>
            </main>
        </>
        )}
        </>
    )
}