export function SectionComponent({title, children}){
    return(
        <>
            <section className="flex flex-col items-center justify-center mx-auto mt-10 text-justify" style={{width: "800px"}}>
            <h1 className="self-start text-2xl font-semibold cyan-gelco text-nowrap">{title}</h1>
                {children}
            </section>
        </>
    )
}