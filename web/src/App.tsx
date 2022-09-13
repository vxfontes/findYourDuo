import './styles/main.css';
import logoImg from './assets/LogoESports.svg';

function App() {
    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
            <img src={logoImg} alt='logo' />

            <h1 className='text-6xl text-white font-black mt-20'>
                Seu <span className='text-transparent bg-gradient-duo bg-clip-text'>duo</span> está aqui.
            </h1>

            <div className="grid grid-cols-6 gap-6 mt-16">
                <a href=''>
                    <img src='/games/game1.png' />
                </a>
                <a href=''>
                    <img src='/games/game2.png' />
                </a>
                <a href=''>
                    <img src='/games/game3.png' />
                </a>
                <a href=''>
                    <img src='/games/game4.png' />
                </a>
                <a href=''>
                    <img src='/games/game5.png' />
                </a>
                <a href=''>
                    <img src='/games/game6.png' />
                </a>
            </div>
        </div>
    )
}

export default App;