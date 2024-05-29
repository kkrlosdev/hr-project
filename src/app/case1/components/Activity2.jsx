"use client"
import React from "react"
import { BorderBeam } from "@/app/components/magicui/border-beam"

export function Activity2(){
    return(
        <>
        <div className="relative flex flex-col items-center justify-center p-2 my-2 text-justify rounded-lg" style={{width: '600px', border: '1px solid rgb(000, 161, 200)'}}>
            <BorderBeam className="-z-10" delay="1" colorFrom="#00A1C8" colorTo="#342C7D" size="230" duration="10" borderWidth="1"/>
            <h2 className="my-1 text-xl">Asocia los términos con sus respectivas categorías</h2>
            <p className="my-1"><span className="cyan-gelco">1.</span> dasdasda <br/>
                <select className="p-1 border rounded border-cyan-600" defaultValue="option1">
                    <option value="option1">prueba1</option>
                    <option value="option2">dadsada</option>
                    <option value="option3">dasdasd</option>
                </select>
            </p>
            <p className="my-1"><span className="cyan-gelco">2.</span> dasdasda <br/>
                <select className="p-1 border rounded border-cyan-600" defaultValue="option2">
                    <option value="option1">asdasd</option>
                    <option value="option2">prueba2</option>
                    <option value="option3">dasdasda</option>
                </select>
            </p>
            <p className="my-1"><span className="cyan-gelco">3.</span> dasdasda <br/>
                <select className="p-1 border rounded border-cyan-600" defaultValue="option3">
                    <option value="option1">asdasd</option>
                    <option value="option2">dsadasda</option>
                    <option value="option3">prueba3</option>
                </select>
            </p>
        </div>
        </>
    )
}