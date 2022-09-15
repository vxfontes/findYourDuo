import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './styles/main.css';
import logoImg from './assets/LogoESports.svg';
import GameBanner from './components/gameBanner';
import AdBanner from './components/adBanner';
import DialogModal from './components/dialog';

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}

function App() {

    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        fetch('http://localhost:3333/games')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])

    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
            <img src={logoImg} alt='logo' />

            <h1 className='text-6xl text-white font-black mt-20'>
                Seu <span className='text-transparent bg-gradient-duo bg-clip-text'>duo</span> está aqui.
            </h1>

            <div className="grid grid-cols-6 gap-6 mt-16">
                {games.map(game => {
                    return (
                        <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads} />
                    )
                }
                )}
            </div>

            <Dialog.Root>
                <AdBanner />

                <DialogModal />
            </Dialog.Root>
        </div>
    )
}

export default App;