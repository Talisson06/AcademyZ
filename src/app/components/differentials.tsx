import '@/scss/style.scss'

export const Differentials = () => {
    return(
        <section className="Differentials">

             <div className="Title_Differentials" data-aos="flip-down">
                <h1>Nossos Diferenciais</h1>
             </div>

             <div className="Card_Differentials" data-aos="flip-up">

                <div className='Card'>
                    <img className = "Icone" src="/imgs/icone-peso-2.png" alt="" />
                    <h2 className='Title_Card'>EQUIPE QUALIFICADA</h2>
                    <p>Profissionais que irão te ajudar  a alcançar seus objetivos e motiva-los.</p>
                    <button className='Btn_Dif'>Conheça nossos professores <img className='Btn_IMG' src="/imgs/arraste-para-a-direita.png" alt="IMG Botão Ir" /></button>
                </div>

                <div className='Card'>
                    <img className = "Icone" src="/imgs/icone-exercicio.png" alt="" />
                    <h2 className='Title_Card'>AMBIENTE MOTIVADOR</h2>
                    <p>Um ambiente seguro e inspirador para te ajudar a sempre se manter motivado nos treinos.</p>
                    <button className='Btn_Dif'>Faça um tour vitural <img className='Btn_IMG' src="/imgs/arraste-para-a-direita.png" alt="IMG Botão Ir" /></button>
                </div>

                <div className='Card'>
                    <img className = "Icone" src="imgs/icone-peso-3.png" alt="" />
                    <h2 className='Title_Card'>AULAS DIFERENCIADAS</h2>
                    <p>Temos uma ampla grade de aulas, que atende todos os alunos. Queime calorias com musculação ou danças.</p>
                    <button className='Btn_Dif'>Ver modalidades  <img className='Btn_IMG' src="/imgs/arraste-para-a-direita.png" alt="IMG Botão Ir" /></button>
                </div>

                <div className='Card' >
                    <img className = "Icone" src="imgs/icone-peso.png" alt="" />
                    <h2 className='Title_Card'>EQUIPAMENTOS MODERNOS</h2>
                    <p>Nossos equipamentos são os mais atualizados, para garantir a sua segurança e eficiência nos exercícios.</p>
                    <button className='Btn_Dif'>faça um tour virtual <img className='Btn_IMG' src="/imgs/arraste-para-a-direita.png" alt="IMG Botão Ir" /></button>
                </div>
             </div>
        </section>
    );
}