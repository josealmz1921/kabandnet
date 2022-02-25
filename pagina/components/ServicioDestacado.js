import Image from "next/image";
import Link from "next/link";

const ServicioDestacado = ({img,title,description}) => {
    return ( 
        <div className=" w-full sm:w-1/2 md:w-1/3 flex justify-start flex-col items-center px-4">
            <div className="overflow-hidden rounded-sm w-3/4 mt-4">
                <Image layout="responsive" src={img} width={700} height={500} />
            </div>
            <p className="text-center font-semibold my-2">{title}</p>
            <p className="font-extralight text-center">{description}</p>
            <div className="flex justify-center md:justify-end w-full mt-4">
                <Link href='/'><a className="text-center bg-sky-700 px-4 py-1 rounded-sm text-white">Ver mas</a></Link>
            </div>
        </div>
     );
}
 
export default ServicioDestacado;