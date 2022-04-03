import { useState } from "react";


export const useForm = <T>( initState: T ) => {

    const [formData, setFormData] = useState( initState );

    const onChange = ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
        setFormData( prev => ({ ...prev, [name]: value }) );
    }

    const resetForm = () => {
        setFormData({ ...initState })
    }

    return {
        ...formData,
        onChange,
        resetForm
    }
}