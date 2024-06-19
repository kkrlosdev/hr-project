export function SectionComponent({ title, children, width= "800px" }){
    return(
        <>
            <section className="flex flex-col items-center justify-center mx-auto mt-10 overflow-hidden text-justify" style={{width: width}}>
            <h1 className="self-start text-2xl font-semibold cyan-gelco text-nowrap">{title}</h1>
                {children}
            </section>
        </>
    )
}