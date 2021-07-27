import styled from 'styled-components';

export const Menu = styled.aside`
  align-items: flex-end;
  background: #1a1a1a;
  border-left: none;
  border-right: 0.2rem solid #333;
  display: flex;
  padding: 0;
  width: 3.3rem;
`;

export const IconContainer = styled.div`
  align-items: center;
  width: 100%;
`;

export const Icon = styled.div`
  color: #dbca67d4;
  cursor: pointer;
  text-align: center;
  padding: 0.5rem;

  & > * {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
