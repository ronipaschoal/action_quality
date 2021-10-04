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

  const language = useContext(LanguageContext);

  const [fieldState, setFieldState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [status, setStatus] = useState('');
  
  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault();
    
    var param = '';
    Object.entries(fieldState).map((value:Array<string>,index:number) => {
      param += value[0] + '=' + value[1];
      param += '&'
    });

    const service = 'https://fiversystem.com/action-quality/mail.php?';
    const API_PATH = `${service}${param.substring(0, param.length - 1)}`;    
    const requestOptions = {
        method: 'get',
    };

    var errorSending = false;

    setStatus(data.status.progress[language.languageActive]);

    const response = await fetch(API_PATH, requestOptions).then(response =>{
      return response.json();
    }).then(data => {
      console.log(data.success);
    }).catch(function(error) {
      errorSending = true;
      setStatus(data.status.error[language.languageActive]);
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });


    console.log(API_PATH);
    setTimeout(
      function() {
        if(!errorSending) {
          setStatus(data.status.success[language.languageActive]);
          setFieldState({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        }
      }.bind(this),
      3000
    );
  }

  return (
    <FormContext.Provider value={{ fieldState, setFieldState }} >
      <section id={data.id} className={styles.contact}>
        <form onSubmit={ e => handleSubmit(e) }>
          <h2>{data.title[language.languageActive]}</h2>
          <p>{status}</p>
            { data.fields.map((field, index) => {
              return(
                <Field key={index} data={field} />
              );
            })}
            <br/>
            <br/>
            <input type="submit" value={ data.submit[language.languageActive] } />
        </form>
      </section>
    </FormContext.Provider>
  );
}

export default Contact;