"use client"
import React from "react"
import { useState } from "react"
import { BorderBeam } from "@/app/components/magicui/border-beam"

export function Activity2(){
    const [respuestas, setRespuestas] = useState({
        pregunta1:'',
        pregunta2:'',
        pregunta3:''
    })
    const respuestasCorrectas = {
        pregunta1: 'civilesclasicos',
        pregunta2: 'solidaridad2',
        pregunta3: 'economicossociales3'
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
                    <h3 className="text-xl">Asocia los términos según sus respectivas categorías</h3>
                    <ol className="list-decimal">
                        <li className="">
                            <p className>Derecho a la vida e integridad física</p>
                            <div className="flex justify-center">
                                <select disabled={resultadosComprobados} name="" id="" className={`px-3 py-1 mx-auto my-1 border ${resultados.pregunta1 === 'incorrecto' ? 'border-red-500' : 'border-blue-500'} rounded`} defaultValue="reconocer" style={{width:'349px'}} onChange={(e) => handleChange(e, 'pregunta1')}>
                                        <option value="economicossociales">Derechos ecónomicos, sociales y culturales</option>
                                        <option value="civilesclasicos">Derechos cíviles y políticos clásicos</option>
                                        <option value="solidaridad">Derechos de la solidaridad</option>
                                </select>
                                {resultados.pregunta1 === 'correcto' && <div className="flex items-center justify-center"><div className="w-4 h-4 ml-2 bg-green-500 rounded-full"></div></div>}
                                {resultados.pregunta1 === 'incorrecto' && <div className="flex items-center justify-center"><div className="w-4 h-4 ml-2 bg-red-500 rounded-full"></div></div>}
                            </div>
                        </li>
                        <li>
                            <p>Derecho a la paz</p>
                            <div className="flex justify-center">
                                <select disabled={resultadosComprobados} name="" id="" defaultValue="civilesclasicos2" className={`px-3 py-1 mx-auto my-1 border ${resultados.pregunta2 === 'incorrecto' ? 'border-red-500' : 'border-blue-500'} rounded`} style={{width:'349px'}} onChange={(e) => handleChange(e, 'pregunta2')}>
                                        <option value="civilesclasicos2">Derechos cíviles y políticos clásicos</option>
                                        <option value="solidaridad2">Derechos de la solidaridad</option>
                                        <option value="economicossociales2">Derechos ecónomicos, sociales y culturales</option>
                                </select>
                                {resultados.pregunta2 === 'correcto' && <div className="flex items-center justify-center"><div className="w-4 h-4 ml-2 bg-green-500 rounded-full"></div></div>}
                                {resultados.pregunta2 === 'incorrecto' && <div className="flex items-center justify-center"><div className="w-4 h-4 ml-2 bg-red-500 rounded-full"></div></div>}
                            </div>
                        </li>
                        <li>
                            <p>Derecho a la formación de sindicatos</p>
                            <div className="flex justify-center">
                                <select disabled={resultadosComprobados} name="" id="" defaultValue="solidaridad3" className={`px-3 py-1 mx-auto my-1 ${resultados.pregunta3 === 'incorrecto' ? 'border-red-500' : 'border-blue-500'} border border-blue-500 rounded`} style={{width:'349px'}} onChange={(e) => handleChange(e, 'pregunta3')}>
                                        <option value="civilesclasicos3">Derechos cíviles y políticos clásicos</option>
                                        <option value="economicossociales3">Derechos ecónomicos, sociales y culturales</option>
                                        <option value="solidaridad3">Derechos de la solidaridad</option>
                                </select>
                                {resultados.pregunta3 === 'correcto' && <div className="flex items-center justify-center"><div className="w-4 h-4 ml-2 bg-green-500 rounded-full"></div></div>}
                                {resultados.pregunta3 === 'incorrecto' && <div className="flex items-center justify-center"><div className="w-4 h-4 ml-2 bg-red-500 rounded-full"></div></div>}
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