import { useState } from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <div className={styles.menuContainer}>
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Menu ✖" : "Open Menu ☰"}
      </button>

      {isOpen && (
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={selectedItem === index ? styles.selected : ""}
              onClick={() => setSelectedItem(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
