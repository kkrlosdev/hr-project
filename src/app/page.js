import Image from "next/image";
import {Logo} from "./components/Logo"
import UkIcon from "@/app/assets/uk-icon.png"
import EsIcon from "@/app/assets/spain-icon.png"

export default function Home() {
  return (
    <>
    <header>

      <section>
        <Logo />
        <h1 className="ml-6 text-4xl w-fit blue-gelco">DERECHOS <br/> HUMANOS</h1>
        <h1 className="mt-1 text-2xl text-center blue-gelco">¡Comencemos la formación!</h1>
        <div className="flex justify-center mt-2">
          <a href="/cases" className="mt-2 text-xl font-bold pink-gelco">Comenzar</a>
        </div>

        <div className="absolute top-0 right-0 m-6">
          <button className="mx-1"><Image src={UkIcon} alt="UK" width={30} height={30} /></button>
          <button><Image src={EsIcon} alt="UK" width={30} height={30} /></button>
        </div>
      </section>
      <section>
        
      </section>
    </header>

    <main>
    </main>

    </>
  )
}