import { NextPage } from 'next';
import { FormEvent, useContext, useState } from 'react';

import { data } from './data.js';

import Field from '../Field/Index';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';
import FormContext from '../../contexts/FormContext';

interface field {
    name: string,
    label: Array<string>,
    placeholder:  Array<string>,
    type: string
}

const Contact: NextPage = () => {

  const { languageActive } = useContext(LanguageContext);
  const { id, fields, title, status, submit, serviceUrl } = data;

  const newMessage = Object.fromEntries(data.fields.map(field => ([field.name, ""])));

  const [fieldState, setFieldState] = useState(newMessage);
  
  const [formStatus, setFormStatus] = useState('');
  
  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault();
    
    const param = Object.entries(fieldState).map( (value:Array<string>, index:number) => {

      if(value[1] === '') { 
        setFormStatus(status.required[languageActive]);
        return 'formError';
      }
      return `${value[0]}=${escape(value[1])}&`;

    });

    if (param.indexOf('formError') === -1) {
      
      const API_PATH = `${serviceUrl}${param.join('')}`;
      const requestOptions = { method: 'get' };

      setFormStatus(status.progress[languageActive]);

      const response = await fetch(API_PATH, requestOptions)
        .then(response => response.json())
        .then(data => {

          if(data.success === undefined) {
            throw Error('undefined'); 
          } else if(data.success === false) {
            setFormStatus(status.required[languageActive]);
          } else {
            setFormStatus(status.success[languageActive]);
            setFieldState(newMessage);
          }
        })
        .catch(error => setFormStatus(status.error[languageActive]));
    }

    setTimeout(function() { setFormStatus('') }, 3000);
  }

  return (
    <FormContext.Provider value={{ fieldState, setFieldState }} >
      <section id={id} className={styles.contact}>
        <form onSubmit={ e => handleSubmit(e) }>
          <h2>{title[languageActive]}</h2>
          <p>{formStatus}</p>
            { fields.map((field, index) => {
              return(
                <Field key={index} data={field} />
              );
            })}
            <div>
              <input type="submit" value={ submit[languageActive] } />
            </div>
        </form>
      </section>
    </FormContext.Provider>
  );
}

export default Contact;