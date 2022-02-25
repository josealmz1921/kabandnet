import Layout from "../components/Layout";
import Servicio from "../components/Servicio";
import Paginate from "../components/Paginate";
import FondoPage from "../components/FondoPage";

const Servicios = () => {
    return ( 
        <div>
            <Layout>
                <FondoPage title='Servicios kaband' img='/img/slider4.jpg' />
                <p className="text-center max-w-[1300px] mx-auto mb-8 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan posuere eros, at semper est tempus eget. Pellentesque lacus ante, commodo eget vulputate ac, tristique at erat. Etiam vulputate lorem semper, luctus nisl nec, porta eros. Suspendisse fringilla elementum orci. </p>
                <div className="max-w-[1300px] m-auto">
                    <div className="flex justify-between flex-wrap">
                        <Servicio img='/img/destacado1.jpg' />
                        <Servicio img='/img/service1.jpg' />
                        <Servicio img='/img/destacado2.jpg' />
                        <Servicio img='/img/destacado3.jpg' />
                    </div>
                </div>
                <Paginate/>
            </Layout>
        </div>
     );
}
 
export default Servicios;