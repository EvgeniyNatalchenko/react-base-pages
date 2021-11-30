import {useState, useEffect} from 'react'


function useForm(callback, validate, validatedata) {
    const [values, setValues] = useState({});
    const [errors, setError] = useState({});
    const [isSubmitting, setSubmiting] = useState(false);

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors])

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setError(validate(values, validatedata));
        setSubmiting(true);
    }

    const handleChange = (event) => {
        setValues(values => ({
            ...values,
            [event.target.name] : event.target.value
        }));
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }
}

export default useForm
