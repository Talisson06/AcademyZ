import '@/scss/style.scss'


export const Carousel = () =>{
    return(
        <section className='Carousel'>
                <div className='Container_Carousel' id='Carousel_Text'>
                    <span>Consultoria Individual</span>
                    <img className= 'Alternes'src="/imgs/academia.png" alt=""  />
                    <span>Consultoria Individual</span>
                    <img className= 'Alternes' src="/imgs/academia.png" alt="" />
                    <span>Consultoria Individual</span>
                    <img className= 'Alternes' src="/imgs/academia.png" alt="" />
                    <span>Consultoria Individual</span>
                    <img className= 'Alternes' src="/imgs/academia.png" alt="" />
                    <span>Consultoria Individual</span>
                    <img className= 'Alternes' src="/imgs/academia.png" alt="" />
                </div>
        </section>
    );

}