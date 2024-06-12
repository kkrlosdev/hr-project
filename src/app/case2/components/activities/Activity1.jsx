import { BorderBeam } from "@/app/components/magicui/border-beam"

export function Activity1(){
    return(
            <div className="relative flex flex-col items-center justify-center p-2 my-2 text-justify rounded-lg" style={{width: '600px', border: '1px solid rgb(000, 161, 200)'}}>
                <BorderBeam className="-z-10" delay="1s" colorFrom="#00A1C8" colorTo="#342C7D" size="230" duration="10" borderWidth="1"/>
                    <h3 className="text-xl">Selecciona la opción <span className="text-green-700">correcta</span></h3>
                    <ol className="list-decimal">
                        <li className="">
                            <p className>Debida diligencia es un proceso de</p>
                            <div className="flex justify-center">
                                <select name="" id="" className="px-3 py-1 mx-auto my-1 border border-blue-500 rounded" defaultValue="remediar" style={{width:'349px'}}>
                                        <option value="respetar">Respetar los derechos humanos</option>
                                        <option value="remediar">Remediar el impacto ambiental</option>
                                        <option value="reconocer">Reconocer grupos de interés</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <p>La remediación se da por</p>
                            <div className="flex justify-center">
                                <select name="" id="" defaultValue="impacto" className="px-3 py-1 mx-auto my-1 border border-blue-500 rounded" style={{width:'349px'}}>
                                    <option value="terceros">Terceros afectados por la actividad</option>
                                    <option value="perdidas">Pérdidas sociales</option>
                                    <option value="impacto">Impacto ambiental desmedido</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <p>Las poblaciones afectadas</p>
                            <div className="flex justify-center">
                                <select name="" id="" className="px-3 py-1 mx-auto my-1 border border-blue-500 rounded" style={{width:'349px'}}>
                                    <option value="apoyadas">Deben ser apoyadas satisfactoriamente</option>
                                    <option value="grupodeinteres">Son un grupo de interés prioritario</option>
                                    <option value="nosonimportantes">No son tan importantes</option>
                                </select>
                            </div>
                        </li>
                    </ol>

                    <button type="submit" className="h-8 flex items-center justify-center my-2 text-white rounded-md shadow w-[349px] hover:bg-green-600 transition bg-cyan-gelco">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                        Comprobar
                    </button>
            </div>
    )
}