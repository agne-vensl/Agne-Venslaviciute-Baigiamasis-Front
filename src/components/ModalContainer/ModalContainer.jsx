import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import * as S from './ModalContainer.style';

Modal.setAppElement('#root');

Modal.defaultStyles = {};

const ModalContainer = ({ isOpen, closeModal, height, width, children }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Modal Window"
    overlayElement={(props, contentElement) => (
      <S.ModalOverlay {...props}>{contentElement}</S.ModalOverlay>
    )}
    contentElement={(props, childrenElements) => (
      <S.ModalContent {...props} height={height} width={width}>
        {childrenElements}
      </S.ModalContent>
    )}
    parentSelector={() => document.querySelector('#modal-root')}
  >
    {children}
  </Modal>
);

ModalContainer.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node,
};

ModalContainer.defaultProps = {
  isOpen: false,
  height: '20rem',
  width: '30rem',
  children: null,
};

export default ModalContainer;
