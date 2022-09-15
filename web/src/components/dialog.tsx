import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import InputModal from './form';

const DialogModal = () => {
    return (
        <Dialog.Portal> {/* vem por cima da tela toda para abrir o modal */}
            {/* tela escurecida */}
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
                <Dialog.Title className='text-3xl text-white font-black'>Publique um anúncio</Dialog.Title> {/* acessibilidade para saber de onde vem o modal */}

                <form className='mt-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='game' className='font-semibold'>Qual o game?</label>
                        <InputModal id='game' type='text' placeholder='Selecione o game que deseja jogar' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='nickName'>Seu nome (ou nickname)</label>
                        <InputModal id='nickName' type='text' placeholder='Como te chamam dentro do jogo' />
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
                            <InputModal id='yearsPlaying' type='number' placeholder='Tudo bem ser ZERO' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor='discord'>Qual seu discord?</label>
                            <InputModal id='discord' type='text' placeholder='Usuario#0000' />
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='weekDays'>Quando costuma jogar?</label>

                            <div className='grid grid-cols-4 gap-2'>
                                <button title='Domingo' className='w-8 h-8 rounded bg-zinc-900'>D</button>
                                <button title='Segunda' className='w-8 h-8 rounded bg-zinc-900'>S</button>
                                <button title='Terça' className='w-8 h-8 rounded bg-zinc-900'>T</button>
                                <button title='Quarta' className='w-8 h-8 rounded bg-zinc-900'>Q</button>
                                <button title='Quinta' className='w-8 h-8 rounded bg-zinc-900'>Q</button>
                                <button title='Sexta' className='w-8 h-8 rounded bg-zinc-900'>S</button>
                                <button title='Sábado' className='w-8 h-8 rounded bg-zinc-900'>S</button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 flex-1'>
                            <label htmlFor='hourStart'>Qual horário do dia?</label>

                            <div className='grid grid-cols-2 gap-2'>
                                <InputModal id='hourStart' type='time' placeholder='De' />
                                <InputModal id='hourEnd' type='time' placeholder='Até' />
                            </div>
                        </div>
                    </div>

                    <div className='mt-2 flex gap-2 text-sm'>
                        <input type='checkbox' />
                        Costumo me conectar no chat de voz
                    </div>

                    <footer className='mt-4 flex justify-end gap-4'>
                        <Dialog.Close type='button'
                            className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                        <button type='submit' 
                            className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                            <GameController size={24}/>
                            Encontrar duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
}

export default DialogModal;