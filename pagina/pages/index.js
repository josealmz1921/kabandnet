import Layout from "../components/Layout"
import Carrousel from "../components/Carrousel"
import ServicioDestacado from "../components/ServicioDestacado"
import Image from "next/image";
import Link from "next/link";
import Producto from "../components/Producto";
import Beneficio from "../components/Beneficio";

export default function Home() {
  return (
    <div>
      <Layout>
        <Carrousel/>
        {/* Seccion de beneficios */}
        <section className="bg-zinc-800 flex flex-row justify-start items-center overflow-x-auto p-4 ">
          <Beneficio img='/img/svg-satellite.png' title='Internet Satelital' />
          <Beneficio img='/img/cloud.png' title='Transferencia de datos' />
          <Beneficio img='/img/hammer.png' title='Soporte tecnico'/>
          <Beneficio img='/img/svg-satellite.png' title='Internet Satelital' />
          <Beneficio img='/img/svg-satellite.png' title='Internet Satelital' />
          <Beneficio img='/img/svg-satellite.png' title='Internet Satelital' />
        </section>
        {/* Seccion de presentacion*/}
        <section className="my-10">
          <div className="flex justify-center flex-col items-center">
          <div className="h-40 mb-4">
            <Image src='/img/logo.png' layout='intrinsic' width={300} height={150} alt='logo.png' />
          </div>
          <h1 className="text-center font-semibold text-3xl mb-4 w-3/4 md:w-1/2">Proveedor de Internet y Telefonía Satelital - Kaband Networks, México.</h1>
            <p className=" w-3/4 md:w-11/12 text-justify">
            Ofrecemos proyectos que integran el servicio de Internet Satelital para sitios sin ningún tipo de infraestructura en comunicación o como red de respaldo que complementan a las comunicaciones convencionales tras una perdida de señal terrestre, ya sea por eventos . Desde la planeación de sus proyectos hasta la puesta en marcha de nuestro servicio, podemos brindarle asesoría y atención personalizada para darle la mejor solución a sus requerimientos.
            </p>
            <p className=" w-3/4 md:w-11/12 text-justify mt-4">
            Nos especializamos en servicio de Internet Satelital, VoIP, Redes VPN, SCADA, Video conferencias, eventos en vivo, etc., a través de Satélites con Alta Eficiencia (High Troughput Satellites - HTS) utilizando la banda Ka con enlaces de hasta 100 Mbps, para atender las necesidades de las industrias Manufactureras, Agricultoras, Turísticas, Constructoras, Marítimas, Aeronáuticas, Petroleras, de Exploración y Minería, así como las Educativas y de Salud, entre otras.
            </p>
          </div>
        </section>
        {/* Seccion de servicios destacados */}
        <section>
          <h2 className="text-center font-medium text-3xl mb-4">Servicios mas solicitados</h2>
          <p className="text-center w-3/4 m-auto px-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus rutrum, sollicitudin nibh et, vehicula ante. Donec iaculis euismod leo, vitae fringilla odio maximus quis. Donec ut neque quis diam bibendum</p>
          <div className=" flex flex-row flex-wrap justify-center max-w-[1300px] m-auto py-4">
            <ServicioDestacado img='/img/destacado1.jpg' title='Lorem ipsum dolor sit' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus rutrum, sollicitudin nibh et, vehicula' />
            <ServicioDestacado img='/img/destacado2.jpg' title='Lorem ipsum dolor sit' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus rutrum, sollicitudin nibh et, vehicula' />
            <ServicioDestacado img='/img/destacado3.jpg' title='Lorem ipsum dolor sit' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus rutrum, sollicitudin nibh et, vehicula' />
          </div>
        </section>
        {/* Seccion de mas sobre nosotros */}
        <section
        style={{ backgroundImage: 'url(/img/slider3.jpg)' }}
        className="
            relative 
            min-h-[350px]
            w-full 
            flex
            justify-between
            bg-cover 
            bg-no-repeat
            bg-center
            bg-fixed
        ">
          <div className="w-full min-h-full bg-black/[.40]">
            <div className="w-full h-full flex flex-col justify-center items-start px-10 py-4">
              <p className="text-white font-bold text-3xl mb-4">Conoce mas hacerca de nosotros</p>
              <p className="text-white font-light text-xl mb-4 treepoints">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus rutrum, sollicitudin nibh et, vehicula ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus rutrum, sollicitudin nibh et, vehicula ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus rutrum, sollicitudin nibh et, vehicula ante.</p>
              <Link href='/'>
                <a className="text-white font-light text-lg p-2 border-orange-500 border-2 rounded-md hover:bg-orange-500 duration-300 hover:border-white">Conocenos</a>
              </Link>
            </div>
          </div>
        </section>
        {/* Seccion de productos destacadoss*/}
        <section className="my-10">
          <h2 className="text-center font-medium text-3xl mb-4">Conoce nuestros productoas mas destacados</h2>
          <p className="text-center w-3/4 m-auto px-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus rutrum, sollicitudin nibh et, vehicula ante. Donec iaculis euismod leo, vitae fringilla odio maximus quis. Donec ut neque quis diam bibendum</p>
          <hr className="w-[90%] mx-auto h-1 mt-6  bg-gradient-to-r from-sky-700 via-white  to-sky-700"/>
          <div className="max-w-[1200px] mx-auto flex flex-col justify-center xl:justify-between sm:flex-row items-stretch mt-10 flex-wrap px-4">
            <Producto hover={true} />
            <Producto hover={true} />
            <Producto hover={true} />
          </div>
        </section>
        {/* Seccion de productos nuevos*/}
        <section className="my-10">
          <h2 className="text-center font-medium text-3xl mb-4">Conoce nuestros nuevos productos</h2>
          <p className="text-center w-3/4 m-auto px-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus rutrum, sollicitudin nibh et, vehicula ante. Donec iaculis euismod leo, vitae fringilla odio maximus quis. Donec ut neque quis diam bibendum</p>
          <hr className="w-[90%] mx-auto h-1 mt-6  bg-gradient-to-r from-sky-700 via-white  to-sky-700"/>
          <div className="max-w-[1200px] mx-auto flex justify-center xl:justify-between flex-col items-stretch mt-10 sm:flex-row px-4 flex-wrap">
            <Producto hover={true} />
            <Producto hover={true} />
            <Producto hover={true} />
          </div>
        </section>
      </Layout>
    </div>
  )
}
