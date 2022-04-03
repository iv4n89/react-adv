import React from 'react'
import { Field, Form, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikComponents = () => {


    return (
        <div>
            <h1>Formik components</h1>

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
                            <label htmlFor="firstName">First name</label>
                            <Field
                                name="firstName"
                                type="text"
                            />
                            <ErrorMessage name='firstName' component="span" />

                            <label htmlFor="lastName">Last name</label>
                            <Field
                                name="lastName"
                                type="text"
                            />
                            <ErrorMessage name='lastName' component="span" />

                            <label htmlFor="email">Email address</label>
                            <Field
                                name="email"
                                type="email"
                            />
                            <ErrorMessage name="email" component="span" />

                            <label>
                                Job type
                            </label>
                            <Field
                                name="jobType"
                                as="Select"
                            >
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-staff">IT staff</option>
                                <option value="it-jr">IT Junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component="span" />

                            <label>
                                <Field
                                    name="terms"
                                    type="checkbox"
                                />
                                Terms and conditions
                            </label>

                            <button type='submit'>Submit</button>

                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
