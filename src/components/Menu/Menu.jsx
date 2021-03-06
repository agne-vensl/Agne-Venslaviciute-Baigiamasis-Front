import React, { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';

import ModalContainer from '../ModalContainer/ModalContainer';

import * as S from './Menu.style';

const Menu = ({ routes }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalChild, setModalChild] = useState(null);

  return (
    <>
      <S.Menu id="menu">
        {routes &&
          routes.map((route) => (
            <S.IconContainer
              key={route.name}
              onClick={() => {
                setModalOpen(true);
                setModalChild(route.component);
              }}
            >
              <S.Icon>{route.icon}</S.Icon>
            </S.IconContainer>
          ))}
      </S.Menu>
      <ModalContainer isOpen={modalOpen} closeModal={() => setModalOpen(false)}>
        {modalChild &&
          cloneElement(modalChild, { closeModal: () => setModalOpen(false) })}
      </ModalContainer>
    </>
  );
};

Menu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Menu;
