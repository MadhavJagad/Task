import styles from "./Modal.module.scss";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          ✖
        </button>
        <h2>Hello World</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum enim
          facere cum vitae quasi accusamus eveniet, recusandae laudantium ipsa
          ipsam! Asperiores hic sed exercitationem magnam illum ex labore
          consequatur soluta.
        </p>
      </div>
    </div>
  );
};

export default Modal;
