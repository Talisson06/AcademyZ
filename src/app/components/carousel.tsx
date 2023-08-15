import '@/scss/style.scss'


export const Carousel = () =>{
    return(
        <section className='Carousel'>
                <div className='Container_Carousel' id='Carousel_Text'>

                    <img className= 'Alternes'src="/imgs/academia.png" alt=""  />
                    <span>Consultoria Individual</span>
                    <img className= 'Alternes'src="/imgs/academia.png" alt=""  />
                    <span>+100 professores</span>
                    <img className= 'Alternes' src="/imgs/academia.png" alt="" />
                    <span>Montamos seu treino</span>
                    <img className= 'Alternes' src="/imgs/academia.png" alt="" />
                    <span>Treine da sua fomra</span>
                    <img className= 'Alternes' src="/imgs/academia.png" alt="" />
                    <span>+10 unidades</span>
                    <img className= 'Alternes' src="/imgs/academia.png" alt="" />

                </div> 
              
        </section>
    );

}