import Form from '@/components/Form';
import Image from 'next/image';
import styles from '@/styles/containers/Contact.module.scss';

type Props = {};

const ContactForm = ({}: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.image}>
          <Image src='/images/img-cheer.webp' alt='team' fill sizes='100%' />
        </div>
        <div className={styles.form}>
          <h1>Get In <span>Touch</span></h1>
          <p>Feel Free to contact us and we will get</p>
          <p>back to you as soon as we can</p>
          <Form />
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
