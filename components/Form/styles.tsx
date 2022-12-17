import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 100%;
  height: 25rem;

  background: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 3px;
  border-width: 0.125rem;
  border-style: solid;
  border-radius: 3px;
  margin-bottom: 25px;
  &::placeholder {
    color: ${props => props.theme.colors.primary};
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    padding-left: 10px;
    font-family: ${props => props.theme.fonts.body};
  }
`;

export const FormContainer = styled.form``;

export const Field = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  p {
    color: red;
  }
  p::before {
    display: inline;
    content: '⚠ ';
  }
  label {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0.25rem;
    font-size: 1.563rem;
  }

  input {
    padding: 10px 15px;
    margin-bottom: 1.2rem;
  }

  textarea {
    width: 100%;
    height: 25rem;

    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 3px;
    border-width: 0.125rem;
    border-style: solid;
    border-radius: 3px;
    margin-bottom: 25px;
    &::placeholder {
      color: ${props => props.theme.colors.primary};
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: -0.01em;
      padding-left: 10px;
      font-family: ${props => props.theme.fonts.body};
    }
  }
`;
