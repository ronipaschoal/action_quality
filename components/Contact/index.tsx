import { NextPage } from 'next';
import { FormEvent, useContext, useState } from 'react';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

interface field {
    name: string,
    label: Array<string>,
    placeholder:  Array<string>,
    type: string
}

interface Props {
  data: {
    id: string,
    title: Array<string>,
    fields: Array<field>,
    submit: Array<string>
  }
}

const Contact: NextPage<Props> = ({ data }) => {

  const language = useContext(LanguageContext);

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState('');

  function handleChange(evt: any) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    var param = '';
    Object.entries(state).map((value:Array<string>,index:number) => {
      param += value[0] + '=' + value[1];
      param += '&'
    });

    const API_PATH = `https://fiversystem.com/action-quality/mail.php?${param.substring(0, param.length - 1)}`;    
    const requestOptions = {
        method: 'get',
    };
  
    const response = await fetch(API_PATH, requestOptions).then(response =>{
      return response.json();
        }).then(data => {
          console.log(data.success);
    })
  }

  return (
    <section id={data.id} className={styles.contact}>
      <form onSubmit={ e => handleSubmit(e) }>
        <h2>{data.title[language.languageActive]}</h2>
        <p>{status}</p>
        { data.fields.map((field, index) => {
            return(
              <div key={index}>
                <label htmlFor={field.name}>{ field.label[language.languageActive] }</label>
                { field.type == "input" &&
                  <input type="text"
                  name={field.name}
                  id={field.name}
                  onChange={handleChange}
                  placeholder={ field.placeholder[language.languageActive] } />
                }
                { field.type == "textarea" &&
                  <textarea name={field.name}
                  id={field.name}
                  onChange={handleChange}
                  placeholder={ field.placeholder[language.languageActive] } />
                }
              </div>
            );
          })}
          <br/>
          <input type="submit" value={ data.submit[language.languageActive] } />
      </form>
    </section>
  );
}

export default Contact;