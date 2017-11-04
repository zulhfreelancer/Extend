import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from '../ModalHeader';
import ModalBody from '../ModalBody';
import BuyGoldForm from '../../BuyGold/BuyGoldForm';

const GoldModal = ({ closeModal }) => (
  <div>
    <ModalHeader title={'Buy gold for user'} closeModal={closeModal} />
    <ModalBody>
      <BuyGoldForm />
    </ModalBody>
  </div>
);

GoldModal.propTypes = {
  closeModal: PropTypes.func.isRequired
};

export default GoldModal;
