import { InputHTMLAttributes } from 'react';

// como input é uma tag padrão, para receber as props com ts, extendemos uma classe que já existe no react
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputModal = (props: InputProps) => {
    return (
        <input {...props}
            className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500' />
    );
}

export default InputModal;