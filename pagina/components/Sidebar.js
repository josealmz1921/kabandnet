import Link from "next/link";

const Siderbar = ({sidebar}) => {
    return ( 
        <div className={`
            ${!sidebar ? 'left-[-100%]' : 'left-0'}
            duration-300
            w-4/5
            xs:w-1/2 
            sm:w-1/3
            md:w-1/6 
            fixed 
            h-[100vh] 
            top-0 
            z-50
            md:left-0 
            md:hidden
            shadow-2xl 
            bg-zinc-900
            text-white
            `}>
            <Link href='/' passHref>
                <div className="flex justify-start flex-row items-center px-3 py-4 cursor-pointer hover:bg-blue-500 hover:text-white duration-300 border-b border-zinc-200">
                    <p className="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    </p>
                    <p>Inicio</p>
                </div>
            </Link>
            <Link href='/productos' passHref>
                <div className="flex justify-start flex-row items-center px-3 py-4 cursor-pointer hover:bg-blue-500 hover:text-white duration-300 border-b border-zinc-200">
                    <p className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </p>
                    <p>Productos</p>
                </div>
            </Link>
            <Link href='/servicios' passHref>
                <div className="flex justify-start flex-row items-center px-3 py-4 cursor-pointer hover:bg-blue-500 hover:text-white duration-300 border-b border-zinc-200">
                    <p className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </p>
                    <p>Servicios</p>
                </div>
            </Link>
            <Link href='/contacto' passHref>
                <div className="flex justify-start flex-row items-center px-3 py-4 cursor-pointer hover:bg-blue-500 hover:text-white duration-300 border-b border-zinc-200">
                    <p className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </p>
                    <p>Contacto</p>
                </div>
            </Link>
            <Link href='/blog' passHref>
                <div className="flex justify-start flex-row items-center px-3 py-4 cursor-pointer hover:bg-blue-500 hover:text-white duration-300 border-b border-zinc-200">
                    <p className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                    </p>
                    <p>Blog</p>
                </div>
            </Link>
        </div>
     );
}
 
export default Siderbar;