import React, { } from 'react'
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { name, email, password1, password2, onChange, resetForm } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return (
        <div>
            <h1>Register page</h1>

            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={onChange}
                    name="name"
                    className={ `${ name.trim().length <= 0 && 'has-error' }` }
                />
                { name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={onChange}
                    name="email"
                    className={ `${ (!isValidEmail(email) || email.trim().length <= 0) && 'has-error' }` }
                />
                { !isValidEmail(email) && <span>Este email no es válido</span> }
                { email.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input
                    type="password"
                    placeholder='Password'
                    value={password1}
                    onChange={onChange}
                    name="password1"
                    className={ `${ (password1.trim().length <= 0 || (password1.trim().length < 6 && password1.trim().length > 0)) && 'has-error' }` }
                />
                { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1.trim().length < 6 &&  password1.trim().length > 0 && <span>La contraseña debe tener más de 6 letras</span> }

                <input
                    type="password"
                    placeholder='Repeat password'
                    value={password2}
                    onChange={onChange}
                    name="password2"
                    className={ `${ (password2.trim().length <= 0 || password2.trim() !== password1.trim() || (password2.trim().length < 6 && password2.trim().length > 0) ) && 'has-error' }` }
                />
                { password2.trim().length <= 0 && <span>Este campo es neserario</span> }
                { password2.trim().length < 6 && password2.trim().length > 0 && <span>La contraseña debe tener más de 6 letras</span> }
                { password2.trim() !== password1.trim() && <span>Ambas contraseñas deben ser iguales</span> }

                <button type='submit'>Save changes</button>
                <button type='button' onClick={resetForm} >Reset form</button>
            </form>
        </div>
    )
}
