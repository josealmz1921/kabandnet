const FondoPage = ({title,img}) => {
    return ( 
        <div
            style={{
                backgroundImage: `url(${img})`
            }}
            className='flex flex-row justify-center items-center h-[45vh] bg-center bg-cover bg-no-repeat bg-opacity-90 mb-8'
        >
            <h1 className="text-center font-semibold text-4xl my-4 text-white">{title && title}</h1>
        </div>
     );
}
 
export default FondoPage;