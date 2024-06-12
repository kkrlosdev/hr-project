import { BorderBeam } from "@/app/components/magicui/border-beam"

export function Activity2(){
    return(
        <div className="relative flex flex-col items-center justify-center p-2 my-2 text-justify rounded-lg" style={{width: '600px', border: '1px solid rgb(000, 161, 200)'}}>
            <BorderBeam className="-z-10" delay="1s" colorFrom="#00A1C8" colorTo="#342C7D" size="230" duration="10" borderWidth="1"/>
            <p>Cuál de las siguientes afirmaciones es <span className="font-semibold text-red-500">falsa</span></p>
            <div className="flex gap-x-4">
                <p>a) blabla</p>
                <p>b) blabla</p>
                <p>c) blabla</p>
            </div>
        </div>
    )
}