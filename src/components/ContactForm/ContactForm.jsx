
// import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addContact} from '../../redux/contactsSlice';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

    const orderSchema = Yup.object({
        name: Yup.string()
          .min(3, 'Minimum 3 characters')
          .max(50, 'Maximum 50 characters')
          .required('Must be filled'),
        number: Yup.string()
          .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
          .min(3, 'Minimum 3 digits')
          .max(50, 'Maximum 50 digits')
          .required('Must be filled'),
      });


    const initialValues = {
        name: '',
        number: ''
    }

    const handleSubmit = (values, options) => {
      dispatch(addContact({ id: Date.now().toString(), ...values}));
      options.resetForm();
  };
   
    return (
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={orderSchema}
          >
            <Form className={s.contactForm}>
              <label>
                Name
                <Field 
                className={s.formInput} 
                name='name' 
                type='text' 
                />
                <ErrorMessage className={s.inputErr} name='name' component='p' />
              </label>
              <label>
                Number
                <Field 
                className={s.formInput} 
                name='number'
                type='text' />
                <ErrorMessage className={s.inputErr} name='number' component='p' />
              </label>
              <button className={s.formBtn} type='submit'>
                Add contact
              </button>
            </Form>
          </Formik>
        </div>
      );
    };
    
    export default ContactForm;


