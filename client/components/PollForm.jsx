import React from 'react'
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';

const PollErrors = Yup.object().shape({
    question: Yup.string()
        .min(10, 'The question must have at least 10 characters')
        .required('Requerido'),
    opt1: Yup.string()
        .required("This is required")
        .min(2, 'The option must have at least 2 characters.')
        .max(30, 'The option cant have more than 30 characters'),
    opt2: Yup.string()
        .required("This is required")
        .min(2, 'The option must have at least 2 characters.')
        .max(30, 'The option cant have more than 30 characters'),
    opt3: Yup.string()
        .min(2, 'The option must have at least 2 characters.')
        .max(30, 'The option cant have more than 30 characters'),
    opt4: Yup.string()
        .min(2, 'The option must have at least 2 characters.')
        .max(30, 'The option cant have more than 30 characters'),
});

const TextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <textarea {...field} {...props} />
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </>
    );
};

const PollForm = ({ initialValues, btnTxt, onSubmit }) => {

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={PollErrors}
        >
            {({ errors, touched, isValid, dirty }) => (
                <Form className='formControl'>
                    <div className='flx clmn'>
                        <div>
                            <label htmlFor="question">Your Question: <span className='errorType'>*</span></label><br />
                            <TextArea
                                name="question"
                                rows="6"
                                placeholder="Insert here your question."
                            />
                        </div>
                        <button disabled={!(isValid && dirty)} type='submit'>{btnTxt}</button>
                        <p className='errorType'>* Required</p>
                    </div>
                    <div className='flx clmn'>
                        <div>
                            <label htmlFor="opt1">Option 1: <span className='errorType'>*</span></label><br />
                            <Field name="opt1" placeholder="Option 1" />
                            {touched.opt1 && errors.opt1 && <div className='errorType'>{errors.opt1}</div>}
                        </div>
                        <div>
                            <label htmlFor="opt2">Option 2: <span className='errorType'>*</span></label><br />
                            <Field name="opt2" placeholder="Option 2" />
                            {touched.opt2 && errors.opt2 && <div className='errorType'>{errors.opt2}</div>}
                        </div>
                        <div>
                            <label htmlFor="opt3">Option 3:</label><br />
                            <Field name="opt3" placeholder="Option 3" />
                            {touched.opt3 && errors.opt3 && <div className='errorType'>{errors.opt3}</div>}
                        </div>
                        <div>
                            <label htmlFor="opt4">Option 4:</label><br />
                            <Field name="opt4" placeholder="Option 4" />
                            {touched.opt4 && errors.opt4 && <div className='errorType'>{errors.opt4}</div>}
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default PollForm