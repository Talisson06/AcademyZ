import '@/scss/style.scss';

export const Plain = () =>{

    return(
        <section className='Plain' data-aos="fade-up">

            <div className='Title_Plain'>
                <h1>PLANOS</h1>
            </div>
            <div className='Cards'>

                <div className='Cards_Plain'>
                    <img src="/imgs/img-plano-1.png" alt="Imagem 1 do Plano" />
                    <h3>Plano 1 Mês</h3>
                    <div className='Sub_Card'>
                        <p>À PARTIR DE R$89,90</p>
                        <button>SELECIONAR</button>
                    </div>
                </div>
                    
                <div className='Cards_Plain'>
                    <h2>Recomendado por nossos Alunos</h2>
                    <img src="/imgs/img-plano-2.png" alt="Imagem 2 do Plano" />
                    <h3>Plano 6 meses</h3>
                    <div className='Sub_Card'>
                        <p>À PARTIR DE R$79,90</p>
                        <button>SELECIONAR</button>
                    </div>
                </div>

                <div className='Cards_Plain'>
                    <img src="/imgs/img-plano-3.png" alt="Imagem 3 do Plano" />
                    <h3>Plano 12 meses</h3>
                    <div className='Sub_Card'>
                        <p>À PARTIR DE R$69,90</p>
                        <button>SELECIONAR</button>
                    </div>
                    
                </div>

            </div>
            
        </section>
    );



}