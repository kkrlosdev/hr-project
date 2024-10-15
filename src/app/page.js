// Next Components
import Image from "next/image";
import Link from "next/link";
// Image Imports
import { Logo } from "./components/Logo"
import UkIcon from "@/app/assets/uk-icon.png"
import EsIcon from "@/app/assets/spain-icon.png"
// MagicUi Components
import TypingAnimation from "./components/magicui/typing-animation";
import ShimmerButton from "./components/magicui/shimmer-button";

export default function Home() {
  return (
    <>
    <header>

      <section className="SectionWelcomePage">
        <Logo />
        <h1 className="my-2 ml-4 text-4xl font-normal blue-gelco w-fit">DERECHOS <span className="block mt-0">HUMANOS</span></h1>
        <div style={{ minHeight: '140px' }} className="flex flex-col justify-between">
          <TypingAnimation text="¡Comencemos la formación!" duration={45} className="font-sans font-semibold blue-gelco"/>
          <div className="flex justify-center mt-1">
            <Link href="/cases"><ShimmerButton background="rgb(197, 022, 087);" shimmerSize="2px" className="font-normal">Comenzar</ShimmerButton></Link>
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
