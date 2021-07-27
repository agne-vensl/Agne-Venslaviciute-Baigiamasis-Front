import styled from 'styled-components';

export const InputContainer = styled.form`
  display: flex;
`;

export const Input = styled.input`
  background: transparent;
  color: #eee;
  border: 0;
  font-size: 0.8rem;
  outline: none;
  padding: 0.6rem;
  width: 100%;
  flex: 1;

  @media only screen and (min-width: 768px) {
    padding: 0.7rem;
  }
`;

export const Button = styled.button`
  background: #333;
  border: 0;
  border-radius: 0.5rem;
  color: #eee;
  cursor: pointer;
  margin: 0.2rem 0.2rem 0.2rem 0;
  outline: none;
  padding: 0.5rem 1rem;
`;
