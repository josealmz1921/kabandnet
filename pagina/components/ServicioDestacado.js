import Image from "next/image";
import Link from "next/link";

const ServicioDestacado = ({img,title,description}) => {
    return ( 
        <div className=" w-full sm:w-1/2 md:w-1/4 flex justify-start flex-col items-center">
            <div className=" w-full rounded-sm p-[1px] mt-4">
                <Image layout="responsive" src={img} width={700} height={500} />
            </div>
            <p className="text-center text-sky-700 font-bold my-2">{title}</p>
        </div>
     );
}
 
export default ServicioDestacado;