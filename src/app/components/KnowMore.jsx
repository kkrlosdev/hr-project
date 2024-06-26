import Link from "next/link";

export function KnowMoreButton({color, href}){
  const bgColorClass = `${color}`;
  return (
      <Link href={href} onClick={(e)=> e.stopPropagation()} className={`flex ${bgColorClass} items-center justify-center w-64 h-12 gap-3 mt-2 text-white rounded-lg hover:shadow-md hover:scale-105 transition-all duration-500`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>    
      ¿Quieres saber más?
      </Link>
  )
}