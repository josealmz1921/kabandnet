import { Link } from "react-router-dom";

const Siderbar = ({sidebar}) => {
    return ( 
        <div className={` 
            ${!sidebar ? 'left-[-100%]' : 'left-0'}
            duration-300
            w-4/5
            xs:w-1/2 
            sm:w-1/3 
            md:w-1/6 
            absolute 
            h-[90vh] 
            top-0 
            md:static 
            md:left-0 
            shadow-2xl 
            bg-white`}>
            <Link to='/admin'>
                <div className="flex justify-start flex-row items-center px-3 py-4 cursor-pointer hover:bg-blue-800 hover:text-white duration-300 border-b border-zinc-200">
                    <p className="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    </p>
                    <p>Inicio</p>
                </div>
            </Link>
            <Link to='/admin/productos'>
                <div className="flex justify-start flex-row items-center px-3 py-4 cursor-pointer hover:bg-blue-800 hover:text-white duration-300 border-b border-zinc-200">
                    <p className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </p>
                    <p>Productos</p>
                </div>
            </Link>
            <Link to='/admin/paginas' >
                <div className="flex justify-start flex-row items-center px-3 py-4 cursor-pointer hover:bg-blue-800 hover:text-white duration-300 border-b border-zinc-200">
                    <p className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </p>
                    <p>Paginas</p>
                </div>
            </Link>
            <Link to='/admin/media'>
                <div className="flex justify-start flex-row items-center px-3 py-4 cursor-pointer hover:bg-blue-800 hover:text-white duration-300 border-b border-zinc-200">
                    <p className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </p>
                    <p>Imagenes</p>
                </div>
            </Link>
            <Link to='/admin/ajustes'>
                <div className="flex justify-start flex-row items-center px-3 py-4 cursor-pointer hover:bg-blue-800 hover:text-white duration-300 border-b border-zinc-200">
                    <p className="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    </p>
                    <p>Ajustes</p>
                </div>
            </Link>
        </div>
     );
}
 
export default Siderbar;