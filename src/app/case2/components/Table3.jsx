import React from 'react';

export function Table3() {
    return (
        <div className="">
            <table className="w-full border border-gray-300">
                <thead className="bg-stone-200">
                    <tr>
                        <th className="p-2 text-center border-2 border-gray-300">Alcance</th>
                        <th className="p-2 text-center border-2 border-gray-300">¿Quiénes y cuántas personas se pueden ver afectadas si se materializa el riesgo?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-2">
                            <div className="w-4 h-4 bg-green-600"></div>
                            <span>1. Bajo</span>
                        </td>
                        <td className="p-2 text-center">El riesgo afecta a un % menor de la población</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-2">
                            <div className="w-4 h-4 bg-yellow-600"></div>
                            <span>2. Moderado</span>
                        </td>
                        <td className="p-2 text-center">El riesgo afecta a un % significativo de la población</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center flex-grow p-2 space-x-3 whitespace-nowrap">
                            <div className="w-4 h-4 bg-orange-600"></div>
                            <span>3. Intermedio</span>
                        </td>
                        <td className="p-2 text-center">El riesgo afecta a un % alto de la población</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-3">
                            <div className="w-4 h-4 bg-red-600"></div>
                            <span>4. Alto</span>
                        </td>
                        <td className="p-2 text-center">El riesgo afecta a un % alto de la población de especial protección (NNJA, Comunidades étnicas...)</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-3">
                            <div className="w-4 h-4 bg-red-800"></div>
                            <span>5. Crítico</span>
                        </td>
                        <td className="p-2 text-center">El riesgo afecta a toda la población</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
