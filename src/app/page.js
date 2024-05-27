import Image from "next/image";
import {Logo} from "./components/Logo"
import UkIcon from "@/app/assets/uk-icon.png"
import EsIcon from "@/app/assets/spain-icon.png"
import TypingAnimation from "./components/magicui/typing-animation";

export default function Home() {
  return (
    <>
    <header>

      <section className="SectionWelcomePage">
        <Logo />
        <h1 className="ml-6 text-4xl font-semibold text-gradient w-fit">DERECHOS <br/> HUMANOS</h1>
        <div style={{ minHeight: '120px' }} className="flex flex-col justify-between">
          <TypingAnimation text="¡Comencemos la formación!" duration={65} className="text-gradient"/>
          <div className="flex justify-center mt-1">
            <a href="/cases" className="text-2xl font-bold pink-gelco">Comenzar</a>
          </div>
        </div>

        <video muted autoPlay loop className="absolute top-0 left-0 object-cover w-full h-full -z-10">
            <source src="/videos/background-video.mp4" type="video/mp4"></source>
        </video>

        <div className="absolute top-0 right-0 m-6">
          <button className="mx-1"><Image src={UkIcon} alt="UK" width={30} height={30} /></button>
          <button><Image src={EsIcon} alt="UK" width={30} height={30} /></button>
        </div>

      </section>
    </header>
    </>
  )
}
