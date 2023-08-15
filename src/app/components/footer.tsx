import '@/scss/style.scss'


export const Footer = () => {
    return(

        <footer data-aos="zoom-in-up">
                <div className='Links_Text'>
                    <a href='#'>Quem somos</a>
                    <a href='#'>AcademiaZ@Todosdireitosresevador</a>
                    <a href='#'>Serviços</a>
                    <a href='#'>Politicas</a>
                    <a href="#">Contatos</a>
                </div>
                <div className='Social_Icons'>
                    <a href='#'><img src="/imgs/instagram.png" alt="img instagram" /></a >
                    <a href='#'><img src="/imgs/facebook.png" alt="img facebook" /></a >
                    <a href='#'><img src="/imgs/twitter.png" alt="img twitter" /></a >
                    <a href='#'><img src="/imgs/youtube.png" alt="img youtube" /></a >
                   
                    
                </div>
        </footer>

    );
}