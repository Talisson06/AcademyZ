import '@/scss/style.scss'

export const Header = () =>{
    return(
            <header className="Header">
                
                <img src="/imgs/Logo-2.png" alt="Meu logo" />
                <nav className='Nav'>
                    <ul className='Nav_List'>
                    
                        <li>
                            <a href="#">Planos</a>
                        </li>

                        <li>
                            <a href="#">Equipamentos</a>
                        </li>

                        <li>
                            <a href="#">Serviços</a>
                        </li>

                        <button className='Button_Direct_Register'>Registre-se</button>
                    </ul>
                    
                </nav>
                
            </header>

        
        
    );
}