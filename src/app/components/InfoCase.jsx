import { Logo } from "./Logo"

export function InfoCase({subtitle}){
    return(
        <section style={{width: "50%"}} className="relative top-36 left-1">

                    <div className="flex flex-col items-center justify-center h-56 space-y-6 text-white bg-blue-gelco">
                        <h1 className="text-6xl">Derechos humanos</h1>
                        <h2 className="text-2xl">{subtitle}</h2>
                    </div>
                    <div className="flex items-center justify-center h-16 bg-white p-7">
                        <Logo/>
                    </div>

        </section>
    )
}