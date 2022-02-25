const Colores = ({colores,size,mt}) => {
    return ( 
        <div className={`flex flex-row ${mt && 'pt-3'}`}>
            { colores && colores.map(color => {

                return (
                    <div 
                    className="shadow-inner cursor-pointer"
                    style={{
                        background:color,
                        padding: '.35rem',
                        borderRadius:'50%',
                        marginRight: 5,
                        width: size,
                        height: size
                    }}></div>
                )
            }) }
        </div>
     );
}
 
export default Colores;