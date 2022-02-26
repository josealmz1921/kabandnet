import Image from "next/image";

const Beneficio = ({img,title}) => {
    return ( 
        <div className="min-w-[50%] xs:min-w-[33.33%] md:min-w-[16%] p-4 max-h-full">
            <div className="p-2 sm:p-4">
                <Image layout="responsive" src={img} width={200} height={200} />
            </div>
            <p>Cambios en las ramas</p>
            <p className="text-white text-lg sm:text-xl font-semibold text-center">{title ? title : ''}</p>
        </div>
     );
}
 
export default Beneficio;