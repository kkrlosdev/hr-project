import Link from "next/link"

export function BackButton(){
    return(
        <Link href="/cases" className="fixed z-50 flex items-center justify-center w-24 h-12 gap-1 ml-1 text-white transition-all rounded-md shadow-lg top-2 left-2 bg-blue-gelco hover:shadow-xl hover:bg-blue-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
            Volver
        </Link>
    )
}