import Triangle from "./Triangle";

const Card = ({last}) => {
    return ( 
        <div className="relative basis-[25%] min-w-[20rem]">
            { !last ? <Triangle/> : null }
            <div className="
            flex
            flex-row
            bg-zinc-100
            overflow-hidden
            rounded-3xl
            h-40
            ">
                <div className="
                flex
                flex-col
                justify-center
                items-center
                w-[70%] 
                px-8">
                    <p className="font-medium text-base">
                        Nos relacionamos con diversos proveedores de equpos y servicios servicios
                    </p>
                </div>
                <div className="bg-cyan-800 w-[30%] rounded-bl-[80px]">

                </div>
            </div>
        </div>
     );
}
 
export default Card;