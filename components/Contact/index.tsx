import { NextPage } from 'next';

import styles from './styles.module.scss';

interface field {
    name: string,
    label: string,
    placeholder: string,
    type: string
}

interface Props {
  data: {
    id: string,
    title: string,
    fields: Array<field>
  }
}

const Contact: NextPage<Props> = ({ data }) => {

  return (
    <section id={data.id} className={styles.contact}>
      <form action="">
        <h2>{data.title}</h2>
        { data.fields.map((field, index) => {
            return(
              <div key={index}>
                <label htmlFor={field.name}>{ field.label }</label>
                { field.type == "input" && <input type="text" name={field.name} id={field.name} placeholder={ field.placeholder } /> }
                { field.type == "textarea" && <textarea name={field.name} id={field.name} placeholder={ field.placeholder } ></textarea> }
              </div>
            );
          })}
          <input type="submit" />
      </form>
    </section>
  );
}

export default Contact;