import { MagnifyingGlassPlus } from 'phosphor-react'

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
                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/games/game1.png' />

                    <div className="w-full pt-16 pb-4 px-4 bg-gradient-game absolute left-0 right-0 bottom-0">
                        <strong className='font-bold text-white block'>League of Legends</strong>
                        <span className='text-zinc-300 text-sm block'>4 anúncios</span>
                    </div>
                </a>

                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/games/game2.png' />

                    <div className="w-full pt-16 pb-4 px-4 bg-gradient-game absolute left-0 right-0 bottom-0">
                        <strong className='font-bold text-white block'>Dota 2</strong>
                        <span className='text-zinc-300 text-sm block'>2 anúncios</span>
                    </div>
                </a>

                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/games/game3.png' />

                    <div className="w-full pt-16 pb-4 px-4 bg-gradient-game absolute left-0 right-0 bottom-0">
                        <strong className='font-bold text-white block'>Apex Legens</strong>
                        <span className='text-zinc-300 text-sm block'>15 anúncios</span>
                    </div>
                </a>

                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/games/game4.png' />

                    <div className="w-full pt-16 pb-4 px-4 bg-gradient-game absolute left-0 right-0 bottom-0">
                        <strong className='font-bold text-white block'>World of Warcraft</strong>
                        <span className='text-zinc-300 text-sm block'>4 anúncios</span>
                    </div>
                </a>

                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/games/game5.png' />

                    <div className="w-full pt-16 pb-4 px-4 bg-gradient-game absolute left-0 right-0 bottom-0">
                        <strong className='font-bold text-white block'>Counter Strike</strong>
                        <span className='text-zinc-300 text-sm block'>4 anúncios</span>
                    </div>
                </a>

                <a href='' className='relative rounded-lg overflow-hidden'>
                    <img src='/games/game6.png' />

                    <div className="w-full pt-16 pb-4 px-4 bg-gradient-game absolute left-0 right-0 bottom-0">
                        <strong className='font-bold text-white block'>Fortnite</strong>
                        <span className='text-zinc-300 text-sm block'>4 anúncios</span>
                    </div>
                </a>
            </div>

            <div className="pt-1 mt-8 bg-gradient-duo self-stretch rounded-lg overflow-hidden">
                <div className="bg-[#2A2634] px-8 py-6 self-stretch flex justify-between items-center">
                    <div>
                    <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
                    <span className='text-zinc-400'>Publique um anúncio para encontrar novos players</span>
                    </div>

                    <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
                        <MagnifyingGlassPlus size={24}/>
                        Publicar anúncio
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App;