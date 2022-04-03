import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikYupPage = () => {

    const {
        handleSubmit,
        errors: {
            email: errorEmail,
            firstName: errorFirstName,
            lastName: errorLastName
        },
        touched: {
            email: touchedEmail,
            firstName: touchedFirstName,
            lastName: touchedLastName
        },
        getFieldProps
    }
        = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                email: ''
            },
            onSubmit: values => {
                console.log(values);
            },
            validationSchema: Yup.object({
                firstName: Yup.string()
                                .max(15, 'Debe tener 15 caracteres o menos')
                                .required('Requerido'),
                lastName: Yup.string()
                                .max(10, "Debe tener 10 caracteres o menos")
                                .required("Requerido"),
                email: Yup.string()
                                .email("No es un email válido")
                                .required("Requerido")
            })
        })

    return (
        <div>
            <h1>Formik yup</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    { ...getFieldProps('firstName') }
                />
                {touchedFirstName && errorFirstName && <span> {errorFirstName} </span>}
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    { ...getFieldProps('lastName') }
                />
                {touchedLastName && errorLastName && <span> {errorLastName} </span>}
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    { ...getFieldProps('email') }
                />
                {touchedEmail && errorEmail && <span> {errorEmail} </span>}

                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}
