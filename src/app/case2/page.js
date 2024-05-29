import { BackButton } from "../components/BackButton"
import { InfoCase } from "../components/InfoCase"
import Image from "next/image"
import Image1 from "@/app/assets/case2/case2-image1.png"
import Image2 from "@/app/assets/case2/case2-imagen2.jpg"
import { ImpactRelationTable } from "./components/Table"

export default function Case1(){
    return(
        <>
            <header className="headerPage2">
                <BackButton/>
                <InfoCase subtitle={"Debida Diligencia"}/>
            </header>

            <hr className="hr-gradient"/>

            <section className="flex flex-col items-center mx-auto mb-4 text-justify" style={{width: "650px"}}>

                <h1 className="self-start my-2 text-3xl font-semibold cyan-gelco">Introducción</h1>


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

            <hr className="hr-gradient"/>

            </section>

            <section className="flex flex-col items-center mx-auto my-6 text-justify" style={{width: "770px"}}>

                <h1 className="self-start my-2 text-2xl font-semibold cyan-gelco">Debida Diligencia en Derechos Humanos</h1>

                <p className="text-xl">La Debida Diligencia es la base de los Principios Rectores de empresas y Derechos Humanos de Naciones Unidas. Es el proceso que nos sirve para evaluar los impactos reales o potenciales, de nuestra actividad, así como los impactos <span className="cyan-gelco">vinculados a nuestra cadena de valor, incluyendo nuestros socios, proveedores y contratistas.</span></p>
                
                <p className="my-2 text-xl">Gelco ha tenido en cuenta la <span className="cyan-gelco">Guía de la OCDE</span> de debida diligencia para una conducta empresarial responsable para diseñar y gestionar este proceso con base en estas medidas:</p>

                <Image src={Image1} alt="El perro" width="800" height="1" className="my-1"/>

                <p className="my-1 text-xl">A partir de un primer análisis externo de debida diligencia, realizado con el asesoramiento de un experto externo, <span className="cyan-gelco">se estableció el diagnóstico de la gestión en DDHH</span>, se identificaron las brechas por cubrir y se desarrolló el plan de acción para cerrar las mismas.</p>
                <p className="text-xl">Conforme lo exigen los estándares internacionales, Gelco llevará a cabo <span className="cyan-gelco">la debida diligencia en derechos humanos cada tres (3) años,</span> con el fin de verificar la gestión de la compañía y los avances respecto al análisis de brechas y plan de acción en DDHH.</p>

            </section>

            <section className="flex flex-col items-center mx-auto my-6 text-justify" style={{width: "800px"}}>
                <h1 className="self-start my-2 text-2xl font-semibold cyan-gelco">Identificación de los grupos de interés en DDHH</h1>
                <p className="text-xl">Para identificar los grupos de interés priorizados para DDHH, se identifican cuáles son  los  derechos  humanos que la empresa  está <span className="cyan-gelco">obligada a no violar, a proteger, a promover y a contribuir en su operación</span> y se asocian con los respectivos grupos de interés.  En el siguiente diagrama se muestran los grupos de interés con los que la empresa entra en relación por el tipo y alcance de su actividad:</p>
                <Image src={Image2} alt="Grupos de interés GELCO" className="my-3"/>
                <p className="text-xl">La responsabilidad de Gelco de respetar los derechos humanos se aplica a todos los derechos humanos internacionalmente reconocidos, pues puede incidir directa o indirectamente en todos ellos.  De esta forma se reconoce que la empresa puede afectar los derechos humanos de sus empleados, contratistas, sus clientes, los proveedores y de quienes se relacionan durante toda la cadena de valor, así como comunidades y otras partes interesadas.</p>

                <h1 className="self-start my-3 text-2xl font-semibold cyan-gelco">Tipos de impacto</h1>
                <ul>
                    <li className="my-1 text-xl list-item"><span className="font-semibold cyan-gelco">Potencial:</span> No sé si está ocurriendo, pero por las condiciones del entorno y/o mi tipo de actividad puede llegar a ocurrir (riesgos).</li>
                    <li className="my-1 text-xl list-item"><span className="font-semibold cyan-gelco">Real:</span> Hay evidencia de que está ocurriendo.</li>
                    <li className="my-1 text-xl list-item "><span className="font-semibold cyan-gelco">Percibido:</span> No hay evidencia de que pueda ocurrir pero mis grupos de interés perciben que sí.</li>
                </ul>

                <h1 className="self-start my-3 text-2xl font-semibold cyan-gelco">Tipo de relación con el impacto</h1>
                <p className="text-xl">La empresa puede correr el riesgo de producir o contribuir a que se produzca una consecuencia negativa sobre los derechos humanos por sus pro¬pias actividades, operaciones o bien por sus relaciones comerciales.  La siguiente tabla brinda orientación sobre la relación que la empresa puede tener con los derechos humanos:</p>
                
                <div className="my-1">
                    <ImpactRelationTable/>
                </div>

                <p className="self-start text-xl">Por cada riesgo identificado, se debe evaluar lo siguiente:</p>

            </section>

        </>
    )
}