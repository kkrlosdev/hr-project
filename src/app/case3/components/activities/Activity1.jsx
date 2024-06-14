import { BorderBeam } from "@/app/components/magicui/border-beam"
import { useState } from "react"

export function Activity1(){
        const [selectedValue, setSelectedValue] = useState('');
        const [result, setResult] = useState(null);
        const [isDisabled, setIsDisabled] = useState(false);
    
        const handleChange = (event) => {
            setSelectedValue(event.target.value);
        };
    
        const handleSubmit = () => {
            if (selectedValue === '3') {
                setResult('correcto');
            } else {
                setResult('incorrecto');
            }
            setIsDisabled(true);
        };
    
        return (
            <div className="relative flex flex-col items-center justify-center p-2 my-2 text-justify rounded-lg" style={{width: '600px', border: '1px solid rgb(000, 161, 200)'}}>
                <BorderBeam className="-z-10" delay="1s" colorFrom="#00A1C8" colorTo="#342C7D" size="230" duration="10" borderWidth="1"/>
                <p className="my-1 text-xl">¿Cuál de los siguientes datos es <span className="font-semibold text-red-500">falso</span>?</p>
                <ul className="flex flex-col my-1 gap-x-4 text-pretty list-decimal max-w-[450px]">
                    <li className="my-1 list-item">El proceso de remediación busca proporcionar reparación efectiva a las víctimas de violaciones de derechos humanos, lo que puede incluir compensación, rehabilitación y garantías de no repetición.</li>
                    <li className="my-1 list-item">Las empresas son responsables de establecer mecanismos de reclamación accesibles y transparentes para que las víctimas puedan presentar sus quejas y recibir una remediación adecuada.</li>
                    <li className="my-1 list-item">El proceso de remediación en derechos humanos solo se aplica a las violaciones cometidas por los gobiernos, no a las realizadas por empresas privadas.</li>
                </ul>
                <div className="flex justify-between w-[390px] my-2">
                    <div className="flex items-center">
                        <label htmlFor="1" className="mr-2">1</label>
                        <input type="radio" value="1" name="option" onChange={handleChange} disabled={isDisabled} />
                    </div>
                    
                    <div className="flex items-center">
                        <label htmlFor="2" className="mr-2">2</label>
                        <input type="radio" value="2" name="option" onChange={handleChange} disabled={isDisabled} />
                    </div>
    
                    <div className="flex items-center">
                        <label htmlFor="3" className="mr-2">3</label>
                        <input type="radio" value="3" name="option" onChange={handleChange} disabled={isDisabled} />
                    </div>
                </div>
    
                {!isDisabled && (
                    <button 
                        type="button" 
                        onClick={handleSubmit} 
                        className="h-8 flex items-center justify-center my-2 text-white rounded-md shadow w-[349px] hover:bg-green-600 transition bg-cyan-gelco"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Comprobar
                    </button>
                )}
    
                {result && (
                    <>
                    <div className={`my-2 p-2 text-center text-white rounded ${result === 'correcto' ? 'bg-green-600' : 'bg-red-600'}`}>
                        {result === 'correcto' ? '¡Correcto! Este dato es falso' : 'Incorrecto. Este dato es verdadero'}
                    </div>
                    <p className="max-w-[450px] mt-1 mb-2 border border-blue-500 p-4 rounded-md">El dato número 3 es <span className="text-red-600">Falso</span> porque el proceso de remediación en derechos humanos también se aplica a las violaciones cometidas por empresas privadas. Las empresas tienen la responsabilidad de remediar cualquier impacto negativo que causen o a los que contribuyan en relación con los derechos humanos.</p>
                    </>
                )}
            </div>
)
}