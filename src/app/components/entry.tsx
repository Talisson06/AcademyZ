import '@/scss/style.scss';


export const Entry = () => {

    

    return(
        <section className='Entry'>
            <div className='Wonman' data-aos='fade-right'>
                <img src="/imgs/modelo-fem.png" alt="" />
            </div>

            <div className='Text_Entry' data-aos="zoom-in-up">
                    <div className='Title_Entry'>
                        <h2>Faça parte do time</h2>
                    </div>
                    <div className='Paragraph'>
                        <p>Nossa academia tem centenas de clientes satisfeitos com os resultados dos treinos.<br/>
                           Não fique de fora, comece seus treinos conosco agora! Se junte ao Time Z!</p>
                    </div>
                    <div className='Data'>
                        <div className='Paragraph_Data'><h4>+10</h4> <p>Temos unidades espalhadas pela cidade de Salvador.</p></div>
                        <div className='Paragraph_Data'><h4>+700</h4> <p>São mais de 700 alunos soteropolitanos que estão no time Z.</p> </div>
                        <div className='Paragraph_Data'><h4>+100</h4> <p>Contamos com mais de 100 professores qualificados.</p></div>
                    </div>
            </div>

            <div className='Man' data-aos='fade-left'>
                <img src="/imgs/modelo-mas.png" alt="" />
            </div>
        </section>
    );
}