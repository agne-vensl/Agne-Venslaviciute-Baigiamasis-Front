import styled from 'styled-components';
// import Modal from 'react-modal';

export const ModalOverlay = styled.div`
  background: #191818ba;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  outline: none;
  padding: 20px;
  z-index: 9999;

  width: 100%;

  @media only screen and (min-width: 768px) {
    padding: 0.5rem;
  }
`;

export const ModalContent = styled.div`
  background: #292727;
  border: 0;
  border-radius: 1rem;
  -webkit-box-shadow: 0.25rem 0.25rem 0.75rem -0.25rem #151414;
  box-shadow: 0.25rem 0.25rem 0.75rem -0.25rem #151414;
  color: #eee;
  height: 90vh;
  left: 50%;
  max-height: 99vh;
  max-width: 99%;
  outline: none;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width};

  @media only screen and (min-width: 768px) {
    height: ${(props) => props.height};
  }
`;
