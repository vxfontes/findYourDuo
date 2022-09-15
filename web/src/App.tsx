import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css';
import logoImg from './assets/LogoESports.svg';
import GameBanner from './components/gameBanner';
import AdBanner from './components/adBanner';

function App() {
    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
            <img src={logoImg} alt='logo' />

            <h1 className='text-6xl text-white font-black mt-20'>
                Seu <span className='text-transparent bg-gradient-duo bg-clip-text'>duo</span> está aqui.
            </h1>

            <div className="grid grid-cols-6 gap-6 mt-16">

                <GameBanner bannerUrl='/games/game1.png' title='League of Legends' adsCount={5} />
                <GameBanner bannerUrl='/games/game2.png' title='Apex Legends' adsCount={4} />
                <GameBanner bannerUrl='/games/game3.png' title='Counter Strike' adsCount={8} />
                <GameBanner bannerUrl='/games/game4.png' title='World of Warcraft' adsCount={2} />
                <GameBanner bannerUrl='/games/game5.png' title='Dota 2' adsCount={1} />
                <GameBanner bannerUrl='/games/game6.png' title='Fortnite' adsCount={7} />

            </div>


            <AdBanner />
        </div>
    )
}

export default App;