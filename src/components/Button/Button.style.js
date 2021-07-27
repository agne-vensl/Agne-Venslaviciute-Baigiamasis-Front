import styled from 'styled-components';

const colors = {
  primary: {
    background: '#eee',
    active: '#999',
  },
};

export const Button = styled.button`
  background: ${(props) => colors[props.color].background};
  border: 0;
  color: ${(props) => colors[props.color]?.color || 'initial'};
  cursor: pointer;
  border-radius: 0.2rem;
  outline: none;
  padding: 0.5rem 1rem;

  &:active {
    background: ${(props) => colors[props.color].active};
  }
`;
