import { BackButton} from "../components/BackButton"
import { InfoCase } from "../components/InfoCase"

export default function Case1(){
    return(
        <>
            <header className="headerPage1">
                <BackButton/>
                <InfoCase subtitle={"Conociendo los derechos humanos"}/>             
            </header>

            <hr className="hr-gradient"/>

            <section className="flex flex-col items-center justify-center mx-auto mb-4 text-justify" style={{width: "650px"}}>

                <h1 className="self-start my-4 text-2xl font-semibold cyan-gelco">Introducción</h1>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="self-start text-xl">
                    ¿Imaginas algo <span className="cyan-gelco">básico, innato y universal?</span>
                </p>

                <p className="text-xl">
                    Algo <span className="cyan-gelco">lo suficientemente importante para implicar </span>a 193 países, traducirse a más de 300 idiomas e involucrar a más de 7 mil millones de personas.
                </p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="text-xl">
                    Algo que te <span className="cyan-gelco">afecta no solo a ti,</span> sino también a todas las personas que conoces y quieres... ¡y a todas aquellas que ni siquiera conoces!
                </p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="text-xl">
                    Algo que implica que podamos desarrollar una <span className="cyan-gelco">vida en común digna, satisfactoria e igualitaria,</span> ¿lo imaginas?
                </p>

            </section>

            <section className="flex flex-col items-center justify-center mx-auto mb-4 text-justify" style={{width: "770px"}}>
                <h1 className="self-start my-2 text-2xl font-semibold cyan-gelco">¿Qué son los derechos humanos?</h1>
                <p className="self-start mb-3">Observa el siguiente vídeo y descubre qué son los Derechos Humanos</p>

                <video controls>
                    <source src="/videos/derechos.mp4" type="mp4/video"></source>
                </video>
            </section>
        </>
    )
}