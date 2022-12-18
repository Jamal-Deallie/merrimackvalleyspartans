import Form from '@/components/Form';

type Props = {};

const ContactForm = ({}: Props) => {
  return (
    <section>
      <div>
        <h1>
          Contact <br /> Us
        </h1>
        <p>Feel Free to contact us and we will get</p>
        <p>back to you as soon as we can</p>
      </div>
      <div>
        <Form />
      </div>
    </section>
  );
};
export default ContactForm;
