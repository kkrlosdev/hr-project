import { BorderBeam } from "@/app/components/magicui/border-beam"
import { useState } from "react"

export function Activity1(){
    const [respuestas, setRespuestas] = useState({
        pregunta1:'',
        pregunta2:'',
        pregunta3:''
    })
    const respuestasCorrectas = {
        pregunta1: 'respetar',
        pregunta2: 'identificar',
        pregunta3: 'apoyadas'
    };
    const [resultados, setResultados] = useState({
        pregunta1:'',
        pregunta2:'',
        pregunta3:''
    })
    const handleChange = (e, pregunta) => {
        setRespuestas({
            ...respuestas,
            [pregunta]: e.target.value
        });
    };
    const comprobarRespuestas = () => {
        const nuevosResultados = {};
        for (const pregunta in respuestas) {
            if (respuestas[pregunta] === respuestasCorrectas[pregunta]) {
                nuevosResultados[pregunta] = 'correcto';
            } else {
                nuevosResultados[pregunta] = 'incorrecto';
            }
        }
        setResultados(nuevosResultados);
    };

    const resultadosComprobados = Object.values(resultados).every(resultado => resultado !== '');

    return(
            <div className="relative flex flex-col items-center justify-center p-2 my-2 text-justify rounded-lg" style={{width: '600px', border: '1px solid rgb(000, 161, 200)'}}>
                <BorderBeam className="-z-10" delay="1s" colorFrom="#00A1C8" colorTo="#342C7D" size="230" duration="10" borderWidth="1"/>
                    <h3 className="text-xl">Selecciona la opción <span className="font-semibold text-green-700">correcta</span></h3>
                    <ol className="list-decimal">
                        <li className="">
                            <p className>Debida diligencia es un proceso de</p>
                            <div className="flex justify-center">
                                <select disabled={resultadosComprobados} name="" id="" className={`px-3 py-1 mx-auto my-1 border ${resultados.pregunta1 === 'incorrecto' ? 'border-red-500' : 'border-blue-500'} rounded`} defaultValue="reconocer" style={{width:'349px'}} onChange={(e) => handleChange(e, 'pregunta1')}>
                                        <option value="respetar">Respetar los derechos humanos</option>
                                        <option value="remediar">Remediar el impacto ambiental</option>
                                        <option value="reconocer">Reconocer grupos de interés</option>
                                </select>
                                {resultados.pregunta1 === 'correcto' && <div className="flex items-center justify-center"><div className="flex items-center justify-center w-6 h-6 ml-3 bg-green-500 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg></div></div>}
                                {resultados.pregunta1 === 'incorrecto' && <div className="flex items-center justify-center"><div className="flex items-center justify-center w-6 h-6 ml-3 bg-red-500 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg></div></div>}
                            </div>
                        </li>
                        <li>
                            <p>La debida diligencia en derechos humanos implica</p>
                            <div className="flex justify-center">
                                <select disabled={resultadosComprobados} name="" id="" defaultValue="omitir" className={`px-3 py-1 mx-auto my-1 border ${resultados.pregunta2 === 'incorrecto' ? 'border-red-500' : 'border-blue-500'} rounded`} style={{width:'349px'}} onChange={(e) => handleChange(e, 'pregunta2')}>
                                    <option value="omitir">Omitir impactos menores en los derechos humanos</option>
                                    <option value="identificar">Identificar y mitigar los impactos negativos en los derechos humanos</option>
                                    <option value="informar">Informar únicamente a los accionistas sobre los derechos humanos</option>
                                </select>
                                {resultados.pregunta2 === 'correcto' && <div className="flex items-center justify-center"><div className="flex items-center justify-center w-6 h-6 ml-3 bg-green-500 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg></div></div>}
                                {resultados.pregunta2 === 'incorrecto' && <div className="flex items-center justify-center"><div className="flex items-center justify-center w-6 h-6 ml-3 bg-red-500 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg></div></div>}
                            </div>
                        </li>
                        <li>
                            <p>Las poblaciones afectadas</p>
                            <div className="flex justify-center">
                                <select disabled={resultadosComprobados} name="" id="" defaultValue="grupodeinteres" className={`px-3 py-1 mx-auto my-1 ${resultados.pregunta3 === 'incorrecto' ? 'border-red-500' : 'border-blue-500'} border border-blue-500 rounded`} style={{width:'349px'}} onChange={(e) => handleChange(e, 'pregunta3')}>
                                    <option value="apoyadas">Deben ser apoyadas satisfactoriamente</option>
                                    <option value="grupodeinteres">Son un grupo de interés prioritario</option>
                                    <option value="nosonimportantes">No son tan importantes</option>
                                </select>
                                {resultados.pregunta3 === 'correcto' && <div className="flex items-center justify-center"><div className="flex items-center justify-center w-6 h-6 ml-3 bg-green-500 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg></div></div>}
                                {resultados.pregunta3 === 'incorrecto' && <div className="flex items-center justify-center"><div className="flex items-center justify-center w-6 h-6 ml-3 bg-red-500 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/></svg></div></div>}
                            </div>
                        </li>
                    </ol>

                    { !resultadosComprobados &&
                    <button onClick={comprobarRespuestas} type="submit" className="h-8 flex items-center justify-center my-2 text-white rounded-md shadow w-[349px] hover:bg-green-600 transition bg-cyan-gelco">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Comprobar
                    </button>
                    }
            </div>
    )
}