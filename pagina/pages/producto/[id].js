import Layout from "../../components/Layout";
import Colores from "../../components/Colores";
import Producto from "../../components/Producto";
import Link from "next/link";

const colores = [
    '#000000',
    '#cccccc',
    '#880e4f'
];

const ProductoPage = () => {
    return (
        <Layout>
            <div className="flex flex-col md:flex-row items-start p-4 max-w-[1400px] mx-auto pb-10">
                <div className=" w-full md:w-1/2 flex flex-row min-h-[28rem] max-h-[28rem] items-stretch ">
                    <div className="w-1/6">
                        <div className="flex justify-between flex-col h-[90%] p-1 w-full ">
                            <img className="w-full cursor-pointer hover:scale-100" src='/img/tel1.jpg' alt="" />
                            <img className="w-full cursor-pointer hover:scale-100" src='/img/tel1.jpg' alt="" />
                            <img className="w-full cursor-pointer hover:scale-100" src='/img/tel1.jpg' alt="" />
                        </div>
                        <div className="flex flex-row h-[10%]">
                            <button className="bg-zinc-200 w-1/2 flex justify-center items-center m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                            <button className="bg-zinc-200 w-1/2 flex justify-center items-center m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className=" w-5/6 flex flex-col justify-center">
                        <img className="object-contain h-full w-full" src='/img/tel1.jpg' />
                    </div>
                </div>
                <div className=" w-full md:w-1/2 p-6">
                    <h1 className="text-3xl font-light my-4 block bg-indigo-900 text-center text-white py-1">Lorem ipsum</h1>
                    <div className="flex flex-row items-center">
                        <p className="text-2xl mr-4 text-zinc-600 font-bold px-4">$ 316.00</p>
                        <Colores colores={colores} size={25} />
                    </div>

                    <div className="py-4">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu accumsan odio, tincidunt laoreet nulla. Duis dignissim, purus vel sagittis vestibulum, erat orci maximus sem, in semper urna leo eu augue. Aliquam non urna in justo tempus egestas a vel erat. Etiam ornare magna tellus, nec volutpat risus tincidunt vel. Nam a posuere nisi, ut volutpat velit. Nam efficitur fringilla nibh, eget viverra neque eleifend eget. Integer nec posuere massa, sit amet efficitur ligula. Vestibulum id dignissim diam, sed bibendum sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam rutrum porttitor erat id sodales.
                        </p>
                        <p>SKU: VCV100-0020-BLK</p>
                        <p>Categorías: Pelican Vault</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-start sm:items-center justify-start sm:justify-between border-r-red-300 w-full">
                        <p className="p-1 h-8 px-4 text-sm my-2 rounded-sm w-full sm:w-[calc(50%-.5rem)] text-center font-semibold bg-cyan-700 text-white">Stock disponible</p>   
                        <Link href='/' ><a className=" h-8 bg-lime-900 w-full sm:w-[calc(50%-.5rem)] p-1 px-4 text-white rounded-sm hover:bg-lime-800 text-center duration-300">Solicitar cotización</a></Link>
                    </div>
                </div>
            </div>
            <hr />
            <br/>
            <br/>
            <h2 className="font-semibold text-3xl text-center">Descripcion del producto</h2>
            <hr className="w-[90%] mx-auto h-1 mt-2  bg-gradient-to-r from-sky-700 via-white  to-sky-700" />
            <section className='px-4 py-8 max-w-[1200px] mx-auto'>
                <div className='flex flex-col sm:flex-row justify-between items-stretch'>
                    <div className='w-full sm:w-1/2 p-4 flex justify-center'>
                        <img className='max-w-full rounded-md' src='/img/slider1.jpg' alt='img.png' />
                    </div>
                    <div className='w-full sm:w-1/2 p-4'>
                        <p className='text-justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu accumsan odio, tincidunt laoreet nulla. Duis dignissim, purus vel sagittis vestibulum, erat orci maximus sem, in semper urna leo eu augue. Aliquam non urna in justo tempus egestas a vel erat. Etiam ornare magna tellus, nec volutpat risus tincidunt vel. Nam a posuere nisi, ut volutpat velit. Nam efficitur fringilla nibh, eget viverra neque eleifend eget. Integer nec posuere massa, sit amet efficitur ligula. Vestibulum id dignissim diam, sed bibendum sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam rutrum porttitor erat id sodales.
                        </p>
                    </div>
                </div>
                <br />
                <h2 className='text-center text-3xl font-semibold'>Lorem ipsum dolor sit amet</h2>
                <hr className="w-[80%] mx-auto h-1 mt-2  bg-gradient-to-r from-sky-700 via-white  to-sky-700" />
                <div className='w-full mt-5'>
                    <table className='w-3/4 mx-auto border-collapse '>
                        <thead>
                            <tr>
                                <th className='text-left border border-zinc-300 p-2'>Servicio</th>
                                <th className='text-left border border-zinc-300 p-2'>Precio</th>
                                <th className='text-left border border-zinc-300 p-2'>Adicional</th>
                                <th className='text-left border border-zinc-300 p-2'>Duración</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-left border border-zinc-300 p-2'>IsatPhone 10 Minute Monthly Plan</td>
                                <td className='text-left border border-zinc-300 p-2'>$44.95</td>
                                <td className='text-left border border-zinc-300 p-2'>$0.85 / each</td>
                                <td className='text-left border border-zinc-300 p-2'>12 months</td>
                            </tr>
                            <tr>
                                <td className='text-left border border-zinc-300 p-2'>IsatPhone 10 Minute Monthly Plan</td>
                                <td className='text-left border border-zinc-300 p-2'>$44.95</td>
                                <td className='text-left border border-zinc-300 p-2'>$0.85 / each</td>
                                <td className='text-left border border-zinc-300 p-2'>12 months</td>
                            </tr>
                            <tr>
                                <td className='text-left border border-zinc-300 p-2'>IsatPhone 10 Minute Monthly Plan</td>
                                <td className='text-left border border-zinc-300 p-2'>$44.95</td>
                                <td className='text-left border border-zinc-300 p-2'>$0.85 / each</td>
                                <td className='text-left border border-zinc-300 p-2'>12 months</td>
                            </tr>
                            <tr>
                                <td className='text-left border border-zinc-300 p-2'>IsatPhone 10 Minute Monthly Plan</td>
                                <td className='text-left border border-zinc-300 p-2'>$44.95</td>
                                <td className='text-left border border-zinc-300 p-2'>$0.85 / each</td>
                                <td className='text-left border border-zinc-300 p-2'>12 months</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <br/>
                <h2 className='text-center text-3xl font-semibold'>Lorem ipsum dolor sit amet,</h2>
                <hr className="w-[80%] mx-auto h-1 mt-2  bg-gradient-to-r from-sky-700 via-white  to-sky-700" />
                <div className='flex flex-col sm:flex-row-reverse justify-between items-stretch'>
                    <div className='w-full sm:w-1/2 p-4 flex justify-center'>
                        <img className='max-w-full rounded-md' src='/img/slider2.jpg' alt='img.png' />
                    </div>
                    <div className='w-full sm:w-1/2 p-4'>
                        <p className='text-justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu accumsan odio, tincidunt laoreet nulla. Duis dignissim, purus vel sagittis vestibulum, erat orci maximus sem, in semper urna leo eu augue. Aliquam non urna in justo tempus egestas a vel erat. Etiam ornare magna tellus, nec volutpat risus tincidunt vel. Nam a posuere nisi, ut volutpat velit. Nam efficitur fringilla nibh, eget viverra neque eleifend eget. Integer nec posuere massa, sit amet efficitur ligula. Vestibulum id dignissim diam, sed bibendum sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam rutrum porttitor erat id sodales.
                        </p>
                    </div>
                </div>
                <br /><br />
                <h2 className='text-center text-3xl font-semibold'>Terms of Service</h2>
                <hr className="w-[80%] mx-auto h-1 mt-2  bg-gradient-to-r from-sky-700 via-white  to-sky-700" />
                <div className='mt-4'>
                    <div class="w-full">
                        <ul className='list-disc pl-12'>
                            <li>In bundle minutes are calls to PSTN, to cellular and voicemail.</li>
                            <li>All other call types charged for on usage basis</li>
                            <li>Out of bundle traffic charges are regular charges</li>
                            <li>The minimum duration for all ISAT Plans is 12 months.</li>
                            <li>Deactivation before the minimum duration&nbsp;will result in an early termination fee of $250</li>
                            <li>Usage will be invoiced or deducted from the allowance in increments of 1 minute</li>
                            <li>Free incoming text messages. Outgoing text messages are deducted from the usage plan</li>
                            <li>Calls to other satellite networks (i.e.; Iridium, Thuraya, Globalstar) are billed at $12.00 per minute.</li>
                        </ul>
                    </div>
                </div>
                <br /><br />
                <h2 className='text-center text-2xl font-semibold border-t'>Lorem ipsum dolor sit amet,</h2>
                <div className='w-full mt-5'>
                    <table className='w-3/4 mx-auto border-collapse '>
                        <thead>
                            <tr>
                                <th className='text-left border border-zinc-300 p-2'>Servicio</th>
                                <th className='text-left border border-zinc-300 p-2'>Precio</th>
                                <th className='text-left border border-zinc-300 p-2'>Adicional</th>
                                <th className='text-left border border-zinc-300 p-2'>Duración</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-left border border-zinc-300 p-2'>IsatPhone 10 Minute Monthly Plan</td>
                                <td className='text-left border border-zinc-300 p-2'>$44.95</td>
                                <td className='text-left border border-zinc-300 p-2'>$0.85 / each</td>
                                <td className='text-left border border-zinc-300 p-2'>12 months</td>
                            </tr>
                            <tr>
                                <td className='text-left border border-zinc-300 p-2'>IsatPhone 10 Minute Monthly Plan</td>
                                <td className='text-left border border-zinc-300 p-2'>$44.95</td>
                                <td className='text-left border border-zinc-300 p-2'>$0.85 / each</td>
                                <td className='text-left border border-zinc-300 p-2'>12 months</td>
                            </tr>
                            <tr>
                                <td className='text-left border border-zinc-300 p-2'>IsatPhone 10 Minute Monthly Plan</td>
                                <td className='text-left border border-zinc-300 p-2'>$44.95</td>
                                <td className='text-left border border-zinc-300 p-2'>$0.85 / each</td>
                                <td className='text-left border border-zinc-300 p-2'>12 months</td>
                            </tr>
                            <tr>
                                <td className='text-left border border-zinc-300 p-2'>IsatPhone 10 Minute Monthly Plan</td>
                                <td className='text-left border border-zinc-300 p-2'>$44.95</td>
                                <td className='text-left border border-zinc-300 p-2'>$0.85 / each</td>
                                <td className='text-left border border-zinc-300 p-2'>12 months</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <br />
            </section>
            <section className="my-10 border-t border-zinc-200 pt-4">
                <h2 className="text-center font-medium text-3xl mb-4">Productos similares</h2>
                <hr className="w-[90%] mx-auto h-1 mt-6  bg-gradient-to-r from-sky-700 via-white  to-sky-700" />
                <div className="max-w-[1200px] mx-auto flex justify-center xl:justify-between flex-col items-stretch mt-10 sm:flex-row px-4 flex-wrap">
                    <Producto hover={true} />
                    <Producto hover={true} />
                    <Producto hover={true} />
                </div>
            </section>
        </Layout>
    );
}

export default ProductoPage;