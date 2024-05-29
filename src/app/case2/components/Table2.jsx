import React from 'react';

export function Table2() {
    return (
        <div className="">
            <table className="w-full border border-gray-300">
                <thead className="bg-stone-200">
                    <tr>
                        <th className="p-2 text-center border-2 border-gray-300">Escala</th>
                        <th className="p-2 text-center border-2 border-gray-300">¿Cuánto puede limitar o afectar la materialización de riesgo al o los titulares de derechos?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-2">
                            <div className="w-4 h-4 bg-green-600"></div>
                            <span>1. Bajo</span>
                        </td>
                        <td className="p-2 text-center">Las consecuencias de la materialización del riesgo no limitan el goce de derechos humanos</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-2">
                            <div className="w-4 h-4 bg-yellow-600"></div>
                            <span>2. Moderado</span>
                        </td>
                        <td className="p-2 text-center">Las consecuencias de la materialización del riesgo se viven una sola vez, sin consecuencias en largo plazo.</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-3">
                            <div className="w-4 h-4 bg-orange-600"></div>
                            <span>3. Intermedio</span>
                        </td>
                        <td className="p-2 text-center">Las consecuencias de la materialización del riesgo se viven más de una vez, sin consecuencias en largo plazo.</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-3">
                            <div className="w-4 h-4 bg-red-600"></div>
                            <span>4. Alto</span>
                        </td>
                        <td className="p-2 text-center">Las consecuencias de la materialización del riesgo tienen consecuencias en largo plazo.</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-3">
                            <div className="w-4 h-4 bg-red-800"></div>
                            <span>5. Crítico</span>
                        </td>
                        <td className="p-2 text-center">El riesgo puede causar la muerte o reducir la calidad o longevidad de la vida de los titulares de derechos.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
