import Colores from "./Colores";

const colores = [
    '#000000',
    '#cccccc',
    '#880e4f'
];

const Telefono = ({hover}) => {
    return ( 
        <div className={`
            flex 
            justify-center 
            flex-col 
            items-center 
            p-2 
            w-full 
            sm:basis-[calc(50%-2rem)] 
            xl:basis-1/3 
            ${hover && 'hover:scale-105'} 
            ${hover && 'hover:border-r-0'} 
            bg-white 
            duration-300
            border-r
            last-of-type:border-r-0
            border-sky-700
            mb-8
        `}>
            <div>
                <img className="max-w-full" src='/img/tel1.jpg' alt='img/.png' />
            </div>
            <Colores colores={colores} mt={true}/>
            <p className="font-semibold my-2 text-[20px]">Radioteléfono</p>
            <p className="text-center text-lg w-1/2 leading-6">Una potencia extraordinaria.</p>
            <p className="text-center w-full my-2 font-normal text-zinc-700">Desde  $100.50 </p>
            <a className=" w-1/3 text-center text-xs bg-sky-700 text-white py-1 mt-4 rounded-full hover:bg-orange-700 duration-300 cursor-pointer font-semibold">Ver producto</a>
            <div>
                <div className="flex flex-col justify-center items-center py-4 border-b border-black">
                    <p className="text-center font-semibold text-lg">6.7 o 6.1 pulgadas</p>
                    <p className="text-center text-base">Pantalla OLED sin marco1 con ProMotion</p>
                    <p className="text-center text-zinc-700 text-sm">
                        Teleobjetivo, gran angular
                        y ultra gran angular
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center py-4 border-b border-black">
                    <p className="text-center font-semibold text-lg">6.7 o 6.1 pulgadas</p>
                    <p className="text-center text-base">Pantalla OLED sin marco1 con ProMotion</p>
                    <p className="text-center text-zinc-700 text-sm">
                        Teleobjetivo, gran angular
                        y ultra gran angular
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center py-4 border-b border-black">
                    <p className="text-center font-semibold text-lg">6.7 o 6.1 pulgadas</p>
                    <p className="text-center text-base">Pantalla OLED sin marco1 con ProMotion</p>
                    <p className="text-center text-zinc-700 text-sm">
                        Teleobjetivo, gran angular
                        y ultra gran angular
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center py-4 border-b border-black">
                    <p className="text-center font-semibold text-lg">6.7 o 6.1 pulgadas</p>
                    <p className="text-center text-base">Pantalla OLED sin marco1 con ProMotion</p>
                    <p className="text-center text-zinc-700 text-sm">
                        Teleobjetivo, gran angular
                        y ultra gran angular
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center py-4 border-b border-black">
                    <p className="text-center font-semibold text-lg">6.7 o 6.1 pulgadas</p>
                    <p className="text-center text-base">Pantalla OLED sin marco1 con ProMotion</p>
                    <p className="text-center text-zinc-700 text-sm">
                        Teleobjetivo, gran angular
                        y ultra gran angular
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Telefono;