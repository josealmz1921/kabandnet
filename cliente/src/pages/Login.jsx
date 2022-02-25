const Login = () => {
    return ( 
        <div className=" flex flex-col justify-center items-center h-screen w-full bg-slate-100">
            <div className=" w-11/12 sm:w-1/2 md:w-1/3 align-middle bg-white p-3 shadow-2xl pt-5 pb-5">
                <form className=" flex flex-col">
                    <h1 className=" text-center py-2 font-bold text-lg mb-5">Inicio de sesión</h1>
                    <label className="mb-1 text-zinc-600" htmlFor="usuario">Usuario</label>
                    <input onKeyUp={e => console.log(e)} id="usuario" type='text' className="mb-4 rounded-sm py-1 border-zinc-700 border-b-2 outline-none border-l-0 border-t-0 border-r-0" />
                    <label className="mb-1 text-zinc-600" htmlFor="password">Contraseña</label>
                    <input type='password' id="password" className="mb-4 rounded-sm py-1 border-zinc-700 border-b-2 outline-none border-l-0 border-t-0 border-r-0" />
                    <button className="w-full bg-blue-800 text-white py-3 uppercase rounded-sm">Iniciar sesión</button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;