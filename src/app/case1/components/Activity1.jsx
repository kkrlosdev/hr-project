"use client"
import React, {useState} from "react"
import { BorderBeam } from "@/app/components/magicui/border-beam";

export function Activity1(){
    const [selectedValue, setSelectedValue] = useState('');
    
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return(
        <div className="relative flex flex-col items-center justify-center p-2 my-2 text-justify rounded-lg" style={{width: '600px', border: '1px solid rgba(0, 0, 0, 0.2)'}}>
            <BorderBeam className="-z-10" delay="1s" colorFrom="#00A1C8" colorTo="#342C7D" size="430" duration="10" borderWidth="1"/>
            <div className="p-2 rounded-md">
                <p className="my-1 text-lg">Marca <span className="font-semibold text-green-600">verdadero</span> o <span className="font-semibold text-red-600">falso</span> según corresponda</p>
                <p className="text-base">Los derechos humanos se clasifican en 2 categorías</p>
                <div className="w-full text-white">
                    <div className="p-3 my-2 rounded bg-blue-gelco">
                        <input type="radio" value="value1" id="opcion1" checked={selectedValue === 'value1'} onChange={handleChange} disabled={selectedValue !== ''}/>
                        <label htmlFor="opcion1" className="ml-2">Verdadero</label>
                    </div>
                    <div className="p-3 my-2 rounded bg-blue-gelco">
                        <input type="radio" value="value2" id="opcion2" checked={selectedValue === 'value2'} onChange={handleChange} disabled={selectedValue !== ''}/>
                        <label htmlFor="opcion2" className="ml-2">Falso</label>
                    </div>
                <hr className="my-4"/>
                </div>

                {selectedValue === 'value2' ? (
                    <>
                        <div className="p-1 text-center text-white bg-green-600 rounded">¡Correcto! Se clasifican en 3 categorías.</div>
                    </>
                    
                ) : selectedValue ==='value1' ? (
                    <div className="p-1 text-center text-white bg-red-600 rounded">Incorrecto, se clasifican en 3 categorías.</div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}