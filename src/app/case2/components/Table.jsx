import React from 'react';

export function ImpactRelationTable() {
    return (
        <div className="my-1">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-200 border-b-2 border-gray-400">
                        <tr>
                            <th className="px-4 py-2 border-2 border-gray-300">Relación con el riesgo / impacto</th>
                            <th className="px-4 py-2 border-2 border-gray-300">Descripción</th>
                            <th className="px-4 py-2 border-2 border-gray-300">Ejemplos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border-b">Directa</td>
                            <td className="px-4 py-2 border-b">Por causa directa de una acción u omisión de la empresa.</td>
                            <td className="px-4 py-2 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Lesiones/muertes en el trabajo.</li>
                                    <li>Despido a causa de embarazo.</li>
                                    <li>Derrames de químicos.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b">Por contribución (indirecta)</td>
                            <td className="px-4 py-2 border-b">Resultado de la acción de un tercero sobre la cual la empresa tuvo incidencia.</td>
                            <td className="px-4 py-2 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Violaciones cometidas por proveedores/contratistas.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-b">Por vínculo</td>
                            <td className="px-4 py-2 border-b">Resultado de la acción de un tercero con el que la empresa tiene un vínculo comercial, así no haya tenido incidencia sobre la acción que genera el riesgo o impacto.</td>
                            <td className="px-4 py-2 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Violaciones de por parte de seguridad pública no protegiendo los bienes de la empresa.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}