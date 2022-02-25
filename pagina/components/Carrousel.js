const Carrousel = () => {
    return ( 
        <div 
        style={{ backgroundImage: 'url(/img/slider4.jpg)' }}
        className="
            relative 
            h-[85vh] 
            w-full 
            flex
            justify-between
            bg-cover 
            bg-no-repeat
            bg-center
        ">
            <button className="ml-2 bg-zinc-200/[.50] p-2 absolute left-0 top-1/2 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <div className="flex flex-col justify-center">
                <div className=" w-full md:w-3/4 xl:w-1/2 px-16 sm:px-16 md:px-20">
                    <p className="text-white text-lg sm:text-3xl md:text-6xl font-semibold mb-4">
                        Aerial solutions
                        for the digital age
                    </p>
                    <p className="text-white font-extralight sm:text-xl md:text-2xl">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud.
                    </p>
                </div>
            </div>
            <button className="mr-2 bg-zinc-200/[.50] p-2 absolute top-1/2 right-0 rounded-sm ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
     );
}
 
export default Carrousel;