import Link from "next/link";
import Image from "next/image";

const Header = ({sidebar,setsidebar}) => {
    return ( 
        <header className="flex justify-around items-center h-[15vh] w-full">
            <div>
                <Image className="block" src='/img/logo.png' layout='intrinsic' width={160} height={60} alt='logo.png' />
            </div>
            <nav className="flex flex-row text-zinc-900">
                <Link href='/'>
                    <a className="hidden md:block font-semibold border-r px-2 border-zinc-700">Inicio</a>
                </Link>
                <Link href='/servicios'>
                    <a className="ml-2 hidden md:block font-semibold border-r px-2 border-zinc-700">Servicios</a>
                </Link>
                <Link href='/telefonos'>
                    <a className="ml-2 hidden md:block font-semibold border-r px-2 border-zinc-700">Telefonos</a>
                </Link>
                <Link href='/productos'>
                    <a className="ml-2 hidden md:block font-semibold border-r px-2 border-zinc-700">Productos</a>
                </Link>
                <Link href='/contacto'>
                    <a className="ml-2 hidden md:block font-semibold border-r px-2 border-zinc-700">Contacto</a>
                </Link>
                <Link href='/blog'>
                    <a className="ml-2 hidden md:block font-semibold">Blog</a>
                </Link>
                <button 
                    onClick={() => {
                        setsidebar(!sidebar)
                    }}
                    className='mr-3 md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </button>
            </nav>
        </header>
     );
}
 
export default Header;