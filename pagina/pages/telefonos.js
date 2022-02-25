import Layout from "../components/Layout";
import Telefono from "../components/Telefono";
import FondoPage from "../components/FondoPage";

const Telefonos = () => {

    return ( 
        <div>
            <Layout>
                <FondoPage title='Nuestros sistemas' img='/img/slider4.jpg' />
                <p className="text-center max-w-[1300px] mx-auto mb-8 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan posuere eros, at semper est tempus eget. Pellentesque lacus ante, commodo eget vulputate ac, tristique at erat. Etiam vulputate lorem semper, luctus nisl nec, porta eros. Suspendisse fringilla elementum orci. </p>
                <div className="max-w-[1300px] m-auto">
                    <div className="flex justify-between flex-wrap">
                        <Telefono />
                        <Telefono />
                        <Telefono />
                    </div>
                </div>
                </Layout>
        </div>
     );
}
 
export default Telefonos;