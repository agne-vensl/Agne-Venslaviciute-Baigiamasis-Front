import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  input {
    border: 0;
    border-radius: 0.2rem;
    margin-top: 0.5rem;
    outline: none;
    padding: 0.5rem;
  }

  button {
    display: block;
    margin-left: auto;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      margin-top: 0;
    }
  }
`;
