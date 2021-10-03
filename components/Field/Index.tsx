import { NextPage } from 'next';
import { useContext, useState } from 'react';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';
import FormContext from '../../contexts/FormContext';

interface field {
  data: {
    name: string,
    label: Array<string>,
    placeholder:  Array<string>,
    type: string
  }
}

const Field: NextPage<field> = ({ data }) => {
  
  const formContext = useContext(FormContext);
  const language = useContext(LanguageContext);

  function handleChange(evt: any) {

    const value = evt.target.value;
    formContext.setFieldState({
      ...formContext.fieldState,
      [evt.target.name]: value
    });
  }

  return (
    <>
      <label htmlFor={data.name}>{ data.label[language.languageActive] }</label>
      { data.type == "input" &&
        <input type="text"
          name={data.name}
          id={data.name}
          value={formContext.fieldState[data.name]}
          onChange={handleChange}
          placeholder={ data.placeholder[language.languageActive] } />
      }
      { data.type == "textarea" &&
        <textarea name={data.name}
          id={data.name}
          value={formContext.fieldState[data.name]}
          onChange={handleChange}
          placeholder={ data.placeholder[language.languageActive] } />
      }
  </>
  );
}

export default Field;