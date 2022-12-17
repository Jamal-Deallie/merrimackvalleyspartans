import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { TextArea, Field, Button } from './styles';

type SigninFormProps = {
  email?: string;
  name?: string;
  message?: string;
};

const MessageSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  name: Yup.string()
    .required('Name is required')
    .min(8, 'Password must be at 8 char long'),
  message: Yup.string()
    .required('Message is required')
    .min(8, 'Message must be at 8 char long'),
});

const Form = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<SigninFormProps>({
    resolver: yupResolver(MessageSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  // const onSubmit = handleSubmit(async data => {

  // });

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <div>
      {isSubmitSuccessful ? <p>Registration Success</p> : null}
      <form onSubmit={onSubmit}>
        <Field>
          <label> Email</label>
          <input type='email' {...register('email')} />
          {errors.email ? (
            <p style={{ color: 'red' }}>{errors.email?.message}</p>
          ) : null}
        </Field>
        <Field>
          <label> Name</label>
          <input type='name' {...register('name')} />
          {errors.name ? (
            <p style={{ color: 'red' }}>{errors.name?.message}</p>
          ) : null}
        </Field>
        <Field>
          <label>Message</label>
          <textarea name='message' required />
          {errors.name ? (
            <p style={{ color: 'red' }}>{errors.name?.message}</p>
          ) : null}
        </Field>

        <Button>
          {/* {isSubmitting ? <span>Submitting...</span> : <span>Submit</span>} */}
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
