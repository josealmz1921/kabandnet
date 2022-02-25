import { useState } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from './Footer';
import Siderbar from "./Sidebar";

const Layout = ({children}) => {

    const [sidebar, setsidebar] = useState(false);

    return ( 
        <div>
            <Head>
                <title>Kabandnet</title>
                <meta name="description" content=""/>
            </Head>
            <Header sidebar={sidebar} setsidebar={setsidebar} />
            <Siderbar sidebar={sidebar}/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;