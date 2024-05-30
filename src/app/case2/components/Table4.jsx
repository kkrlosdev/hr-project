import React from 'react';

export function Table4() {
    return (
        <div className="">
            <table className="w-full border border-gray-300">
                <thead className="bg-stone-200">
                    <tr>
                        <th className="p-2 text-center border-2 border-gray-300">Carácter irremediable</th>
                        <th className="p-2 text-center border-2 border-gray-300">¿Es posible remediar el impacto una vez ha ocurrido?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-2">
                            <div className="w-4 h-4 bg-green-600"></div>
                            <span>1. Bajo</span>
                        </td>
                        <td className="p-2 text-center">El impacto se remedia a través de la implementación de medidas ya establecidas por la empresa</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-2">
                            <div className="w-4 h-4 bg-yellow-600"></div>
                            <span>2. Moderado</span>
                        </td>
                        <td className="p-2 text-center">El impacto se remedia a través de nuevas medidas implementadas directamente por la empresa</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center flex-grow p-2 space-x-3 whitespace-nowrap">
                            <div className="w-4 h-4 bg-orange-600"></div>
                            <span>3. Intermedio</span>
                        </td>
                        <td className="p-2 text-center">Remediar el impacto requiere de la coordinación y colaboración de múltiples actores</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-3">
                            <div className="w-4 h-4 bg-red-600"></div>
                            <span>4. Alto</span>
                        </td>
                        <td className="p-2 text-center">El impacto es muy difícil de remediar y requiere de acciones complejas con la participación de múltiples actores</td>
                    </tr>
                    <tr className="border-2 border-gray-100">
                        <td className="flex items-center p-2 space-x-3">
                            <div className="w-4 h-4 bg-red-800"></div>
                            <span>5. Crítico</span>
                        </td>
                        <td className="p-2 text-center">Una vez materializado el impacto, es imposible restituir el derecho</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
