import { NextPage } from 'next';

import styles from './styles.module.scss';

interface Props {
  data: {
    id: string,
    title: string,
    name: {
      label: string,
      placeholder: string
    },
    email: {
      label: string,
      placeholder: string
    },
    phone: {
      label: string,
      placeholder: string
    },
    subject: {
      label: string,
      placeholder: string
    },
    message: {
      label: string,
      placeholder: string
    }
  }
}

const Contact: NextPage<Props> = ({ data }) => {

  return (
    <section id={data.id} className={styles.contact}>
      <form action="">
        <h2>{data.title}</h2>
        <div>
          <label htmlFor="name">{ data.name.label }</label>
          <input type="text" name="name" id="name" placeholder={ data.name.placeholder } />
        </div>
        <div>
          <label htmlFor="email">{ data.email.label }</label>
          <input type="text" name="email" id="email" placeholder={ data.email.placeholder } />
        </div>
        <div>
          <label htmlFor="phone">{ data.phone.label }</label>
          <input type="text" name="phone" id="phone" placeholder={ data.phone.placeholder } />
        </div>
        <div>
          <label htmlFor="subject">{ data.subject.label }</label>
          <input type="text" name="subject" id="subject" placeholder={ data.subject.placeholder } />
        </div>
        <div>
          <label htmlFor="message">{ data.message.label }</label>
          <textarea name="message" id="message" placeholder={ data.message.placeholder }></textarea>
        </div>
      </form>
    </section>
  );
}

export default Contact;