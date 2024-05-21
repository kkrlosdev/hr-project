import { Logo } from "../components/Logo"
import { BackButton} from "../components/BackButton"

export default function Case1(){
    return(
        <>
            <header className="headerPage1">
                <BackButton/>

                <section style={{width: "50%"}} className="relative top-36 left-1">

                    <div className="flex flex-col items-center justify-center h-56 space-y-6 text-white bg-blue-gelco">
                        <h1 className="text-5xl">Derechos humanos</h1>
                        <h2 className="text-2xl">Conociendo los derechos humanos</h2>
                    </div>
                    <div className="flex items-center justify-center h-16 bg-cyan-gelco p-7">
                        <Logo/>
                    </div>

                </section>
                
            </header>
            <hr></hr>
            <section className="flex flex-col justify-center mx-auto mb-4" style={{width: "650px"}}>
                <h1 className="my-6 text-2xl font-semibold cyan-gelco">Introducción</h1>
                <p className="text-xl text-justify">
                    ¿Imaginas algo <span className="cyan-gelco">básico, innato y universal?</span>
                </p>
                <p className="text-xl text-justify">
                    Algo <span className="cyan-gelco">lo suficientemente importante para implicar </span>a 193 países, traducirse a más de 300 idiomas e involucrar a más de 7 mil millones de personas.
                </p>
            </section>
        </>
    )
}