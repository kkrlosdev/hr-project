import { BackButton } from "../components/BackButton"
import { InfoCase } from "../components/InfoCase"

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

                <h1 className="self-start my-2 text-3xl font-semibold cyan-gelco">Debida Diligencia en Derechos Humanos</h1>

                <p className="text-xl">La Debida Diligencia es la base de los Principios Rectores de empresas y Derechos Humanos de Naciones Unidas. Es el proceso que nos sirve para evaluar los impactos reales o potenciales, de nuestra actividad, así como los impactos <span className="cyan-gelco">vinculados a nuestra cadena de valor, incluyendo nuestros socios, proveedores y contratistas.</span></p>

            </section>

        </>
    )
}