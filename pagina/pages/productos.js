import Layout from "../components/Layout";
import Producto from "../components/Producto";
import Paginate from "../components/Paginate";
import FondoPage from "../components/FondoPage";

const Productos = () => {
    return ( 
        <div>
            <Layout>
                <FondoPage title='Productos kaband' img='/img/slider4.jpg' />
                <div className="max-w-[1300px] m-auto">
                    <div className="flex justify-between flex-wrap">
                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>
                    </div>
                </div>
                <Paginate/>
            </Layout>
        </div>
     );
}
 
export default Productos;