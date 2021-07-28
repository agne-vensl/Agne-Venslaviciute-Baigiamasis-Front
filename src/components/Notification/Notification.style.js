import styled from 'styled-components';

export const Notification = styled.div`
  background-color: #00000061;
  border-radius: 0.625rem;
  color: #eee;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem 1rem 1.5rem 2rem;
  position: relative;
`;

export const DeleteButton = styled.div`
  background-color: #6c4c74;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
`;
