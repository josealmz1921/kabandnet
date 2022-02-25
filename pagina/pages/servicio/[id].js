import Image from 'next/image';
import Layout from '../../components/Layout';
import ServicioDestacado from '../../components/ServicioDestacado'
import Producto from '../../components/Producto';

const Servicio = () => {

    return ( 
        <Layout>
            <div className='px-4 py-8 max-w-[1200px] mx-auto'>
                <h1 className='text-center text-2xl font-semibold'>Lorem ipsum dolor sit amet,</h1>
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
                <br/>
                <h2 className='text-center text-xl font-semibold border-t'>Lorem ipsum dolor sit amet</h2>
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
                <br/>
                <h2 className='text-center text-2xl font-semibold border-t'>Lorem ipsum dolor sit amet,</h2>
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
                <br/><br/>
                <h2 className='text-center text-2xl font-semibold border-t'>Terms of Service</h2>
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
                <br/><br/>
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
                <br/>
                <br/>
                <h2 className='text-center text-2xl font-semibold border-t'>Productos destacados</h2>
                <div className="max-w-[1200px] mx-auto flex justify-center xl:justify-between flex-col items-stretch mt-10 sm:flex-row px-4 flex-wrap">
                    <Producto hover={true} />
                    <Producto hover={true} />
                    <Producto hover={true} />
                </div>
            </div>
        </Layout>
     );
}
 
export default Servicio;