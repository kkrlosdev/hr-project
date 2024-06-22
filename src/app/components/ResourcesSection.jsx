export function ResourceSection({backgroundColor, children}){
    return(
        <>
            <section className="relative flex flex-col items-center h-[162px] w-[500px] justify-center p-8 text-justify rounded-lg shadow-lg" style={{backgroundColor:`${backgroundColor}`}}>
                {children}
            </section>
        </>
    )
}