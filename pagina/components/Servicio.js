import Image from "next/image";
import Link from "next/link";

const Servicio = ({img}) => {
    return ( 
        <div className="w-1/3 basis33 p-4 shadow-xl mb-4">
            <Image layout="responsive" src={img} width={300} height={200}/>
            <div>
                <p className="text-justify py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan posuere eros, at semper est tempus eget. Pellentesque lacus ante, commodo eget vulputate ac, tristique at erat. Etiam vulputate lorem semper, luctus nisl nec, porta eros. Suspendisse fringilla elementum orci. </p>
            </div>
            <Link href="/">
                <a className="text-center bg-sky-700 text-white p-2 mt-2 block">Ver servicio</a>
            </Link>
        </div>
     );
}
 
export default Servicio;