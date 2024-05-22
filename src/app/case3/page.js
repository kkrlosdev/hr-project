import { BackButton } from "../components/BackButton"
import { InfoCase } from "../components/InfoCase"

export default function Case1(){
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

            <section className="flex flex-col items-center justify-center mx-auto mb-4 text-justify" style={{width: "770px"}}>
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
        </>
    )
}