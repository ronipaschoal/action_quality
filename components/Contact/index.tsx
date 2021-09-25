import { NextPage } from 'next';
import { useContext } from 'react';

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
  
  return (
    <section id={data.id} className={styles.contact}>
      <form action="">
        <h2>{data.title[language.languageActive]}</h2>
        { data.fields.map((field, index) => {
            return(
              <div key={index}>
                <label htmlFor={field.name}>{ field.label[language.languageActive] }</label>
                { field.type == "input" &&
                  <input type="text"
                  name={field.name}
                  id={field.name}
                  placeholder={ field.placeholder[language.languageActive] } />
                }
                { field.type == "textarea" &&
                  <textarea name={field.name}
                  id={field.name}
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