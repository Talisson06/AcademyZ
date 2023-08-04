import '@/scss/style.scss'
import { Header } from './header';


export const Hero = () => {
    return (
        <main className='Div_Hero'>
               
                <div className='Presentation'>
                    <div className='Title'>
                            <h1>Conheça o estilo da tartaruga</h1>
                    </div>

                    <div className='Sub_Title'>
                            <h2>Treine com os melhores</h2>
                    </div>

                    <div className='Text'>
                            <h3>Transforme-se em um grande guerreiro(a), Adquira mais resistência e força treinando na nossa academia escola da tartaruga. 
                                aqui você terá os melhores professores e equipamentos modernos que te ajudaram a evoluir sempre.</h3>
                    </div>
                    
                    <button className='Button_Direct'>
                            Começar
                    </button> 

                </div>

                <div className='Banner_Img'>
                    <img src="/imgs/banner-teste-2.png" alt="banner" />
                </div>
        </main>
    );
}

