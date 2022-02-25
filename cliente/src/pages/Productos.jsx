const Productos = () => {
    return ( 
        <div className="w-full">
            <div>
                <button>Agregar productos</button>
            </div>
            <div className="p-1 mt-4">
                <div className="md:bg-white md:shadow-xl rounded-md md:border md:border-zinc-400">
                    <table class="table-auto border-collapse w-full overflow-hidden bg-none">
                        <thead className="border-b border-zinc-400">
                            <tr className="hidden md:table-row">
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="last-of-type:border-b-0 md:border-b md:w-auto w-full md:text-center border-zinc-400 flex flex-col border-0 md:table-row p-1 shadow-md mb-2 md:shadow-none">
                                <td className="py-2"> <span className="font-semibold md:hidden">Nombre: </span> The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="py-2"> <span className="font-semibold md:hidden">Precio: </span> Malcolm Lockyer</td>
                                <td className="py-2"> <span className="font-semibold md:hidden">Categoria:</span> Categoria 1 </td>
                                <td className="
                                    flex justify-end
                                    p-2
                                ">
                                    <button className="border border-zinc-500 p-1 rounded-md ml-2 w-20">Eliminar</button>
                                    <button className="border border-zinc-500 p-1 rounded-md ml-2 w-20">Editar</button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     );
}
 
export default Productos;