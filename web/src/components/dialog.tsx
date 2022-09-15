import * as Dialog from '@radix-ui/react-dialog';

const DialogModal = () => {
    return (
        <Dialog.Portal> {/* vem por cima da tela toda para abrir o modal */}
            {/* tela escurecida */}
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' /> 

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'>
                <Dialog.Title>Publique um anúncio</Dialog.Title> {/* acessibilidade para saber de onde vem o modal */}

                <Dialog.Content>
                    asdasdad
                </Dialog.Content>
            </Dialog.Content>
        </Dialog.Portal>
    );
}

export default DialogModal;