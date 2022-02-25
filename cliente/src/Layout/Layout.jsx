import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Siderbar from "./Sidebar";

const Layout = () => {

    const [sidebar, setsidebar] = useState(false);

    return ( 
        <div className="h-screen ">
            <Header setsidebar={setsidebar} sidebar={sidebar} />
            <div className="flex justify-between h-[90vh] flex-col md:flex-row relative">
                <Siderbar sidebar={sidebar}/>
                <div className="w-full p-2 overflow-y-auto md:w-5/6">
                    <Outlet/>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;