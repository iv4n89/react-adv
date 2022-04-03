import React from 'react'
import { FormikErrors, useFormik } from 'formik'

import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({ firstName, lastName, email }: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!firstName) {
            errors.firstName = 'Required';
        } else if (firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!lastName) {
            errors.lastName = 'Required';
        } else if (lastName.length > 10) {
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const { handleChange,
        values: {
            email,
            firstName,
            lastName
        },
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
        handleBlur
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
            validate,
        })

    return (
        <div>
            <h1>Formik basic tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    name='firstName'
                    onChange={handleChange}
                    value={firstName}
                    onBlur={handleBlur}
                />
                {touchedFirstName && errorFirstName && <span> {errorFirstName} </span>}
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    name='lastName'
                    onChange={handleChange}
                    value={lastName}
                    onBlur={handleBlur}
                />
                {touchedLastName && errorLastName && <span> {errorLastName} </span>}
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    name='email'
                    onChange={handleChange}
                    value={email}
                    onBlur={handleBlur}
                />
                {touchedEmail && errorEmail && <span> {errorEmail} </span>}

                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}
