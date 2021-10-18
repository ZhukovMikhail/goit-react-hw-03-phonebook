// import React from 'react';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';
// import iconSvg from './sprite.svg';

const ContactList = ({ contItems, filteredValue, deleteHandler }) => {
  const filteredItems = contItems.filter(contItem =>
    contItem.name.toLowerCase().includes(filteredValue.toLowerCase().trim()),
  );
  const renderItems = filteredValue !== '' ? filteredItems : contItems;

  return renderItems.map(renderItem => {
    const renderItemTelAtrebute = 'tel:' + renderItem.number;
    return (
      <li className={styles.items} id={renderItem.id} key={renderItem.id}>
        <div className={styles.contItemsWrapper}>
          <span>{renderItem.name}</span>
          <span>
            <a href={renderItemTelAtrebute}>
              <svg className={styles.icon} viewBox="0 0 32 32">
                <path d="M27.419 20.852l-4.201-0.48c-1.009-0.116-2.002 0.232-2.713 0.943l-3.044 3.044c-4.681-2.382-8.519-6.203-10.901-10.901l3.060-3.060c0.711-0.711 1.059-1.704 0.943-2.713l-0.48-4.168c-0.198-1.671-1.604-2.928-3.292-2.928h-2.862c-1.869 0-3.424 1.555-3.308 3.424 0.877 14.126 12.174 25.407 26.284 26.284 1.869 0.116 3.424-1.439 3.424-3.308v-2.861c0.016-1.671-1.241-3.077-2.911-3.275z"></path>
              </svg>

              {renderItem.number}
            </a>
          </span>
        </div>
        <button
          className={styles.itemBtn}
          type="button"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactList;

ContactList.prototype = {
  contItems: PropTypes.array,
  filterValue: PropTypes.string,
  deleteHandler: PropTypes.func,
  filteredValue: PropTypes.array,
};
