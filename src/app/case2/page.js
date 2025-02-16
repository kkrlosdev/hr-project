"use client"
// Components
import { BackButton } from "../components/BackButton"
import { Header } from "../components/Header"
import { Footer } from "@/app/components/Footer"
import { ImpactRelationTable } from "./components/Table"
import { Table2 } from "./components/Table2"
import { Table3 } from "./components/Table3"
import { Table4 } from "./components/Table4"
import { SectionComponent } from "../components/SectionComponent"
import { Activity1 } from "./components/activities/Activity1"
import { Activity2 } from "./components/activities/Activity2"
import ShimmerButton from "../components/magicui/shimmer-button"
import NavDock from "../components/Dock"
// Image Imports
import Image from "next/image"
import Image1 from "@/app/assets/case2/case2-image1.webp"
import Image2 from "@/app/assets/case2/case2-imagen2.webp"
import Image3 from "@/app/assets/case2/case2-image3.webp"
// React Components
import { ClipLoader } from "react-spinners"
import { useState, useEffect } from "react"

export default function Case2(){
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
                <header className="headerPage2">
                    <Header/>
                    <BackButton/>
                </header>

                <NavDock />

                <hr className="hr-gradient"/>

                <SectionComponent title="Introducción" width="650px">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>

                    <p className="text-xl">El segundo <span className="cyan-gelco">principio rector sobre las empresas y derechos humanos,</span> se refiere al deber y compromiso de todas las empresas, sin excepción, de respetar los Derechos Humanos en cualquier lugar que operen.</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>

                    <p className="text-xl">Es crítico <span className="cyan-gelco">mitigar o eliminar los impactos potenciales y reales </span>de las empresas sobre los Derechos Humanos. Esto se logra mediante la aplicación de la <span className="cyan-gelco">Debida Diligencia.</span></p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>

                    <p className="text-xl"><span className="cyan-gelco">Actuar con la Debida Diligencia </span>es el principal reto para las empresas en materia de Derechos Humanos</p>

                </SectionComponent>

                <SectionComponent title="Debida Diligencia en Derechos Humanos" width="770px">
                    <p className="my-2 text-xl">La Debida Diligencia es la base de los Principios Rectores de empresas y Derechos Humanos de Naciones Unidas. Es el proceso que nos sirve para evaluar los impactos reales o potenciales, de nuestra actividad, así como los impactos <span className="cyan-gelco">vinculados a nuestra cadena de valor, incluyendo nuestros socios, proveedores y contratistas.</span></p>                    
                    <p className="my-2 text-xl">Gelco ha tenido en cuenta la <span className="cyan-gelco">Guía de la OCDE</span> de debida diligencia para una conducta empresarial responsable para diseñar y gestionar este proceso con base en estas medidas:</p>
                    <Image src={Image1} alt="Guía de la OCDE" width="800" height="1" className="my-1"/>
                    <p className="my-1 text-xl">A partir de un primer análisis externo de debida diligencia, realizado con el asesoramiento de un experto externo, <span className="cyan-gelco">se estableció el diagnóstico de la gestión en DDHH</span>, se identificaron las brechas por cubrir y se desarrolló el plan de acción para cerrar las mismas.</p>
                    <p className="text-xl">Conforme lo exigen los estándares internacionales, Gelco llevará a cabo <span className="cyan-gelco">la debida diligencia en derechos humanos cada tres (3) años,</span> con el fin de verificar la gestión de la compañía y los avances respecto al análisis de brechas y plan de acción en DDHH.</p>
                </SectionComponent>

                <SectionComponent title="Identificación de los grupos de interés en DDHH">
                    <p className="mt-1 text-xl">Para identificar los grupos de interés priorizados para DDHH, se identifican cuáles son  los  derechos  humanos que la empresa  está <span className="cyan-gelco">obligada a no violar, a proteger, a promover y a contribuir en su operación</span> y se asocian con los respectivos grupos de interés.  En el siguiente diagrama se muestran los grupos de interés con los que la empresa entra en relación por el tipo y alcance de su actividad:</p>
                    <Image src={Image2} alt="Identificación de los grupos de interés en DDHH" className="my-3"/>
                    <p className="text-xl">La responsabilidad de Gelco de respetar los derechos humanos se aplica a todos los derechos humanos internacionalmente reconocidos, pues puede incidir directa o indirectamente en todos ellos.  De esta forma se reconoce que la empresa puede afectar los derechos humanos de sus empleados, contratistas, sus clientes, los proveedores y de quienes se relacionan durante toda la cadena de valor, así como comunidades y otras partes interesadas.</p>

                    <h1 className="self-start my-3 text-2xl font-semibold cyan-gelco">Tipos de impacto</h1>
                    <ul>
                        <li className="my-1 text-xl list-item"><span className="cyan-gelco">Potencial:</span> No sé si está ocurriendo, pero por las condiciones del entorno y/o mi tipo de actividad puede llegar a ocurrir (riesgos).</li>
                        <li className="my-1 text-xl list-item"><span className="cyan-gelco">Real:</span> Hay evidencia de que está ocurriendo.</li>
                        <li className="my-1 text-xl list-item "><span className="cyan-gelco">Percibido:</span> No hay evidencia de que pueda ocurrir pero mis grupos de interés perciben que sí.</li>
                    </ul>

                    <h1 className="self-start my-3 text-2xl font-semibold cyan-gelco">Tipo de relación con el impacto</h1>
                    <p className="text-xl">La empresa puede correr el riesgo de producir o contribuir a que se produzca una consecuencia negativa sobre los derechos humanos por sus propias actividades, operaciones o bien por sus relaciones comerciales.  La siguiente tabla brinda orientación sobre la relación que la empresa puede tener con los derechos humanos:</p>
                    
                    <div className="my-1">
                        <ImpactRelationTable/>
                    </div>

                    <p className="self-start my-1 text-xl">Por cada riesgo identificado, se debe evaluar lo siguiente:</p>

                    <div className="my-2">
                        <Table2/>
                    </div>

                    <div className="my-2">
                        <Table3/>
                    </div>

                    <div className="my-2">
                        <Table4/>
                    </div>
                </SectionComponent>

                <hr className="hr-gradient"/>

                <SectionComponent title="¿Qué hacer si se presentan consecuencias negativas sobre los DDHH?">
                    <h2 className="self-start my-2 text-xl font-semibold underline cyan-gelco">Políticas de actuación</h2>
                    <ol className="text-xl list-decimal">
                        <li className="my-1 list-item">Gelco <span className="cyan-gelco">tomará acciones ante todos los casos de riesgo</span> en los que pueda involucrarse en violaciones graves de los derechos humanos, entendiendo el porqué y el cómo le afecta cada una de las situaciones, y así poder tomar las acciones pertinentes para cada caso. </li>
                        <li className="my-1 list-item">Para todos los casos, Gelco <span className="cyan-gelco">interrumpirá o modificará la actividad que tiene una consecuencia negativa potencial o real</span> en DDHH a fin de prevenir o mitigar la probabilidad de que la consecuencia se produzca o vuelva a producirse, y en dado caso de que no sea suficiente, aplicará la reparación respectiva.</li>
                        <li className="my-1 list-item">Si la empresa se encuentra en riesgo de involucrarse en la aparición de una consecuencia negativa únicamente por estar vinculada a sus operaciones, productos o servicios mediante una relación comercial, <span className="cyan-gelco">la empresa no está obligada a la reparación;</span> sin embargo, puede influenciar la misma.</li>
                    </ol>

                    <p className="my-3 text-xl">El siguiente esquema muestra la guía de actuación en los procesos de reparación y remedio, de acuerdo con el nivel de responsabilidad o vinculación de Gelco con situaciones de consecuencias negativas sobre los derechos humanos:</p>
                    <Image src={Image3} alt="Guía de actuación en los procesos de reparación"/>

                    <h1 className="self-start my-1 text-xl font-semibold underline cyan-gelco">Pasos para seguir</h1>
                    <ol className="list-decimal">
                        <li className="my-1 text-xl list-item">Establecer un orden de prioridad de atención, tomando en cuenta:
                            <ol className="pl-2 list-alpha">
                                <li className="pl-1 my-2 list-item"><span className="cyan-gelco">El alcance, la escala y el carácter irremediable</span> para evaluar la gravedad de las consecuencias negativas; es decir, desde las que causan los daños más graves a la población y pueden convertirse en irremediables si no se les brinda una respuesta temprana, a aquellas no tan urgentes.</li>
                                <li className="pl-1 my-2 list-item">Que si una consecuencia negativa potencial es grave debe tener <span className="cyan-gelco">carácter prioritario,</span> sea cual sea la probabilidad de que ocurra.</li>
                                <li className="pl-1 my-2 list-item"><span className="cyan-gelco">Prestar atención especial</span> a las personas pertenecientes a grupos vulnerables que puedan padecer las consecuencias negativas más graves sobre los derechos humanos.</li>
                            </ol>
                        </li>
                        <li className="my-1 text-xl list-item">Definir las acciones de reparación a implementar, que pueden ser:
                            <ol className="pl-2 list-alpha">
                                <li className="pl-1 my-2 list-item"><span className="cyan-gelco">Restitución:</span> destinadas al restablecimiento del derecho, tales como: retorno a la residencia, devolución de bienes, reintegración al empleo, etc</li>
                                <li className="pl-1 my-2 list-item"><span className="cyan-gelco">Indemnización:</span> comprende el daño material, físico y moral.</li>
                                <li className="pl-1 my-2 list-item"><span className="cyan-gelco">Rehabilitación:</span> entre otras, atención médica, psicológica, servicios sociales y legales, etc.</li>
                                <li className="pl-1 my-2 list-item"><span className="cyan-gelco">Satisfacción:</span> entre ellas se encuentran la verificación de los hechos, derecho a la verdad, actos públicos de desagravios, sanciones contra los responsables; conmemoraciones, etc.</li>
                                <li className="pl-1 my-2 list-item"><span className="cyan-gelco">Garantía de no repetición:</span> pretenden asegurar que las víctimas no vuelvan a ser objeto de violaciones, para lo cual se deben adoptar, por ejemplo, formación, reformas a procedimientos, mecanismos de prevención y vigilancia, etc.</li>
                            </ol>
                        </li>
                        <p className="text-xl">Cuando la empresa lo considere necesario, <span className="cyan-gelco">acudirá a un asesor experto en el tema,</span> para definir el tratamiento debido.</p>
                        <li className="my-2 text-xl list-item"><span className="cyan-gelco">Dar a conocer las medidas a implementar</span> al titular del derecho, a través del canal de denuncia correspondiente y los mecanismos judiciales disponibles para su caso.</li>
                        <li className="my-2 text-xl list-item"><span className="cyan-gelco">Implementar</span> las medidas de reparación/remediación.</li>
                        <li className="my-2 text-xl list-item"><span className="cyan-gelco">Evaluar la satisfacción</span> del titular del derecho con las medidas tomadas.</li>
                        <li className="my-2 text-xl list-item">Cerrar el caso.</li>
                    </ol>
                </SectionComponent>

                <SectionComponent title="Seguimiento de la implementación y los resultados">
                    <p className="text-xl">Gelco monitorea y hace seguimiento de la implementación y de la eficacia de los compromisos internos, actividades y objetivos de la empresa en relación con la debida diligencia mediante los siguientes mecanismos, entre otros:</p>
                    <ul className="text-xl list-disc">
                        <li className="my-2">Revisiones periódicas e informes de gestión.</li>
                        <li className="my-2">Auditorías internas o externas.</li>
                        <li className="my-2">Encuestas y entrevistas con grupos de interés prioritarios.</li>
                        <li className="my-2">Evaluaciones periódicas de las relaciones y/o vínculos comerciales.</li>
                        <li className="my-2 ">Reevaluación de los impactos.</li>
                    </ul>
                    <h1 className="self-start text-2xl font-semibold cyan-gelco">Comunicación de los impactos</h1>
                    <p className="my-1 text-xl">La comunicación a nuestros grupos de interés de la información relevante acerca de las políticas, procesos y actividades de debida diligencia llevadas a cabo para identificar y abordar los impactos negativos reales o potenciales en DDHH se hará a través de informes anuales de sostenibilidad o de responsabilidad corporativa de la empresa u otras formas adecuadas de divulgación.</p>
                    <p className="my-1 text-xl">En cuanto a los impactos sobre los derechos humanos causados por la empresa o a los que contribuya, Gelco comunicará a los titulares de derechos afectados o potencialmente afectados la información relevante de manera oportuna y culturalmente sensible y accesible. </p>
                    <p className="my-1 text-xl">En todos los casos, se respetará la confidencialidad comercial y otras consideraciones sobre competencia o seguridad.</p>
                </SectionComponent>


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

            <Footer/>

            </main>

        </>
        )}
        </>
    )
}