import '@/scss/style.scss';

export const Entry = () => {
    return(
        <section className='Entry'>
            <div className='Wonman'>
                <img src="/imgs/modelo-fem.png" alt="" />
            </div>

            <div className='Text_Entry'>
                    <div>
                        <h2>Faça parte do time</h2>
                    </div>
                    <div>
                        <p>Nossa academia tem centenas de clientes satisfeitos com os resultados dos treinos.
                           Não fique de fora, comece seus treinos conosco agora! Se junte ao Time Z!</p>
                    </div>
                    <div>
                        <div>+10 Temos unidades espalhadas pela cidade de Salvador.</div>
                        <div>+700 São mais de 700 alunos soteropolitanos que estão no time Z.</div>
                        <div>+100 Contamos com mais de 100 professores  qualificados.</div>
                    </div>
            </div>

            <div className='Man'>
                <img src="/imgs/modelo-mas.png" alt="" />
            </div>
        </section>
    );
}