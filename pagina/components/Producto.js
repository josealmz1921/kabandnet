import Link from 'next/link'

const Producto = () => {
    return ( 
        <div className="basis-[calc(33.33%-1rem)] mb-4 border-2 rounded-md overflow-hidden border-zinc-300">
            <div className="p-2">
                <img src="/img/tel1.jpg" alt='telefono imagen' />
            </div>
            <div className='w-full bg-sky-900 py-1'>
                <p className='block text-center font-semibold text-2xl text-white'>Radiotelefono</p>
            </div>
            <div className="p-2">
                <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam quis quam ut mollis. Phasellus commodo consectetur neque, quis lacinia orci tincidunt vel. Maecenas a nibh nec ligula laoreet mattis. Nunc quis nisl vel nulla sodales vulputate sit amet vitae ex. Vivamus nec augue eu odio hendrerit bibendum. Sed tristique rhoncus dolor dapibus lacus.
                </p>
            </div>
            <div className='flex flex-row'>
                <div className="w-1/3 border-t-2 border-zinc-300">
                    <p className='block text-center py-2'>$ 150.00</p>
                </div>
                <div className="w-2/3 bg-cyan-800 ">
                    <Link href='/'>
                        <a className='uppercase text-center block text-white py-2'>Ver producto</a>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Producto;