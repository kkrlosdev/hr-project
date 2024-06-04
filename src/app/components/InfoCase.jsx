import { Logo } from "./Logo"

export function InfoCase({subtitle}){
    return(
        <section style={{width: "50%"}} className="relative top-36 left-1">

                    <div className="flex flex-col items-center justify-center space-y-6 text-white rounded-3xl h-72 bg-blue-gelco">
                        <h1 className="text-5xl">Derechos Humanos</h1>
                        <h2 className="text-2xl">{subtitle}</h2>
                        <div className="flex items-center justify-center w-full h-16 bg-white p-7">
                            <Logo/>
                        </div>
                    </div>

        </section>
    )
}