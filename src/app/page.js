import Image from "next/image";

export default function Home() {
  return (
    <>
    <header>

      <section>
        <span>
          <Image src="/logo.png" alt="Hola" width={100} height={100} className="m-6"/>
        </span>
        <h1 className="ml-6 text-4xl w-fit">DERECHOS <br/> HUMANOS</h1>
        <h1 className="mt-1 text-2xl text-center blue-gelco">¡Comencemos la formación!</h1>
        <a href="/" className="flex justify-center mt-2 text-xl font-bold pink-gelco">Comenzar</a>

        <div className="absolute top-0 right-0 m-6">
          <button><Image src="/uk-icon.png" alt="UK" width={30} height={30} /></button>
          <button><Image src="/spain-icon.png" alt="UK" width={30} height={30} /></button>
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