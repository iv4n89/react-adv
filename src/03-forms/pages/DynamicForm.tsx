import React from 'react'
import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MyTextImput } from '../components/MyTextImput'
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required(rule.message);
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 1, rule.message);
        }
        if (rule.type === 'email') {
            schema = schema.email(rule.message);
        }
    };

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={e => console.log(e)}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form noValidate>
                        {formJson.map(({ name, type, placeHolder, label, options }) => {

                            if (type === 'input' || type === 'password' || type === 'email') {
                                return <MyTextImput
                                    type={type as any}
                                    name={name}
                                    label={label}
                                    placeholder={placeHolder}
                                    key={name}
                                />
                            } else if (type === 'select') {
                                return (
                                    <MySelect
                                        key={name}
                                        label={label}
                                        name={name}

                                    >
                                        {options?.map(({ id, label, value }) => (
                                            <option value={value} key={id} > {label} </option>
                                        ))}
                                    </MySelect>
                                )
                            }

                            throw new Error('El type: ' + type + ' no es soportado');

                        })}

                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
