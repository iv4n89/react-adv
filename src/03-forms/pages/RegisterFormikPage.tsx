import React, { } from 'react'
import { Formik, Form } from 'formik'
import { MyTextImput } from '../components/MyTextImput';
import '../styles/styles.css';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {

    

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={console.log}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                .required('El campo es requerido')
                                .min(2, 'El nombre debe tener al menos dos letras')
                                .max(15, 'El nombre no debe exceder de 15 letras'),
                        email: Yup.string()
                                .email('El email debe tener un formato válido')
                                .required('El email es requerido'),
                        password1: Yup.string()
                                .required('La contraseña es requerida')
                                .min(6, 'La contraseña debe tener al menos 6 caracteres'),
                        password2: Yup.string()
                                .required('Ambas contraseñas deben ser iguales')
                                .min(6, 'La contraseña debe tener al menos 6 caracteres')
                                .oneOf([Yup.ref('password1')], 'Ambas contraseñas deben ser iguales'),
                    })
                }
            >
                {(formik) => (
                    <Form>
                        <MyTextImput label='Nombre' name='name' />
                        <MyTextImput label='Email' name='email' />
                        <MyTextImput label='Contraseña' name='password1' type='password' />
                        <MyTextImput label='Repita contraseña' name='password2' type='password' />

                        <button type='submit'>Create</button>
                        <button type='button' onClick={() =>formik.resetForm()}>Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
