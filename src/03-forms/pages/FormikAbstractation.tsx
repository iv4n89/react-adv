import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'
import { MyTextImput } from '../components/MyTextImput';
import { MySelect } from '../components/MySelect';
import { MyCheckbox } from '../components/MyCheckbox';

export const FormikAbstractation = () => {


    return (
        <div>
            <h1>Formik abstractation</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
                        lastName: Yup.string()
                            .max(10, "Debe tener 10 caracteres o menos")
                            .required("Requerido"),
                        email: Yup.string()
                            .email("No es un email válido")
                            .required("Requerido"),
                        terms: Yup.boolean()
                            .oneOf([true], "Debe de aceptar las condiciones"),
                        jobType: Yup.string()
                            .notOneOf(['it-jr'], 'Esta opción no es permitida')
                            .required("Requerido")

                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextImput
                                label='First name'
                                name='firstName'
                            />

                            <MyTextImput
                                label='Last name'
                                name='lastName'
                            />

                            <MyTextImput
                                label="Email"
                                name="email"
                                placeholder='Escribe tu email'
                                type='email'
                            />

                            <MySelect
                                name="jobType"
                                label='Job Type'
                            >
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-staff">IT staff</option>
                                <option value="it-jr">IT Junior</option>
                            </MySelect>

                            <MyCheckbox label='Terms and conditions' name='terms' />

                            <button type='submit'>Submit</button>

                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
