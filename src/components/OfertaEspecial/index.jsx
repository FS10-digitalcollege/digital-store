import './estilo.css'

const Oferta = () => {
    return(
        <>
           <div>
            <img src="src\components\OfertaEspecial\Ellipse 11.png" alt="elipse" className="img1" />
            <img src="src\components\OfertaEspecial\Laye 1.png" alt="tenis" className="imtip" />
            </div> 
            
            <div className='container'>
             <h1 className='titulo1'>Oferta especial</h1>
             <h2 className='content'> Air Jordan edição de 
colecionador </h2>
<h2 className='content2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</h2>
            <button className='button'>Ver oferta</button>
             </div>
        </>
    );
}

 export default Oferta