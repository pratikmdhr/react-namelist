import React, { Fragment } from 'react';
import reactDom from 'react-dom';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Style from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const closeModalHandler = () => props.displayModal(false);
  const Backdrop = () => (
    <div className={Style.backdrop} onClick={closeModalHandler}></div>
  );

  const ModalOverlay = () => (
    <Card className={Style.modal}>
      <h2>{props.title}</h2>
      <p className={Style.content}>{props.message}</p>
      <Button onClick={closeModalHandler}>Okay</Button>
    </Card>
  );
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {reactDom.createPortal(
        <ModalOverlay />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ErrorModal;
