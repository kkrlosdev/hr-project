import { useState } from 'react';
import { BorderBeam } from '@/app/components/magicui/border-beam';

export function Activity2() {
    const [selectedValue, setSelectedValue] = useState('');
    const [result, setResult] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedValue === 'c') {
            setResult('correcto');
        } else {
            setResult('incorrecto');
        }
        setIsDisabled(true);
    };

    return (
        <div className="relative flex flex-col items-center justify-center p-2 my-2 text-justify rounded-lg" style={{width: '600px', border: '1px solid rgba(0, 0, 0, 0.2)'}}>
            <BorderBeam className="-z-10" delay="1s" colorFrom="#00A1C8" colorTo="#342C7D" size="230" duration="10" borderWidth="1"/>
            <p className="my-1 text-xl">¿Cuál de las siguientes afirmaciones es <span className="font-semibold text-red-500">falsa</span>?</p>
            <ul className="flex flex-col my-1 gap-x-4 list-alpha">
                <li> La debida diligencia beneficia a ambas partes</li>
                <li> Debida diligencia hace parte de los principios rectores</li>
                <li> No hay seguridad en el proceso de debida diligencia</li>
            </ul>
            <div className="flex justify-between w-[390px] my-2">
                <div className="flex items-center">
                    <label htmlFor="a" className="mr-2">a</label>
                    <input type="radio" value="a" name="option" onChange={handleChange} disabled={isDisabled} />
                </div>
                
                <div className="flex items-center">
                    <label htmlFor="b" className="mr-2">b</label>
                    <input type="radio" value="b" name="option" onChange={handleChange} disabled={isDisabled} />
                </div>

                <div className="flex items-center">
                    <label htmlFor="c" className="mr-2">c</label>
                    <input type="radio" value="c" name="option" onChange={handleChange} disabled={isDisabled} />
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
                <div className={`my-2 p-2 text-center text-white rounded ${result === 'correcto' ? 'bg-green-600' : 'bg-red-600'}`}>
                    {result === 'correcto' ? '¡Correcto! Esta afirmación es falsa' : 'Incorrecto. Esta afirmación es verdadera'}
                </div>
            )}
        </div>
    );
}
