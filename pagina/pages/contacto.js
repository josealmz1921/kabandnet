import Layout from "../components/Layout";
import Image from "next/image";
import Mapa from '../components/Mapa';

const Contacto = () => {
    return ( 
        <div>
            <Layout>
                <div className="flex flex-col sm:flex-row justify-between h-[60vh]">
                    <div className=" w-full h-1/2 sm:h-full sm:w-1/2">
                        <img className="object-cover h-full w-full" src='/img/contacto.jpg' alt='Imagen Contacto' />
                    </div>
                    <div className=" w-full h-1/2 sm:h-full sm:w-1/2">
                        <Mapa/>
                    </div>
                </div>
                <div className="flex flex-col p-4 mt-11 md:flex-row ">
                    <form className=" w-full md:w-1/2 p-4 md:border-r border-zinc-800">
                        <h1 className="text-center text-2xl font-semibold block">Información de contacto</h1>
                        <div className="flex flex-col justify-start mb-2">
                            <label className="mb-2">Nombre</label>
                            <input className="block border border-zinc-600 p-1 rounded-sm" type='email' placeholder="Nombre completo" />
                        </div>
                        <div className="flex flex-col justify-start mb-2">
                            <label className="mb-2">Correo</label>
                            <input className="block border border-zinc-600 p-1 rounded-sm" type='email' placeholder="Correo" />
                        </div>
                        <div className="flex flex-col justify-start mb-2">
                            <label className="mb-2">Telefono</label>
                            <input className="block border border-zinc-600 p-1 rounded-sm" type='tel' placeholder="Telefono" />
                        </div>
                        <div className="flex flex-col justify-start mb-2">
                            <label className="mb-2">Sector al que pertenece:</label>
                            <select className="block border border-zinc-600 p-1 rounded-sm">
                                <option>--Sectores</option>
                            </select>
                        </div>
                    </form>
                    <div className="p-4 md:w-1/2">
                        <div className="flex flex-col justify-start h-[80%]">
                            <label className="mb-2">Correo</label>
                            <textarea className="block border border-zinc-600 p-1 rounded-sm resize-none min-h-[10rem] h-full" />
                        </div>
                        <div className="flex justify-center">
                            <button className="mt-8 bg-sky-900 text-white py-1 px-8 rounded-sm text-center hover:bg-sky-800 duration-300">Enviar</button>
                        </div>
                    </div>
                    
                </div>
            </Layout>
        </div>
     );
}
 
export default Contacto;