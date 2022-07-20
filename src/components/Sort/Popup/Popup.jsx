import React from 'react';

const Popup = ({ popupHidden, sortNames, ...props }) => {
  const handleSortItem = (id) => {
    props.setSortNameId(id);
    props.handlePopup();
  };

  return (
    <div hidden={popupHidden} className={props.className} ref={props.popupRef}>
      <ul>
        {sortNames.map((name) => (
          <li
            key={name.id}
            className={props.sortNameId === name.id ? 'active' : ''}
            onClick={() => handleSortItem(name.id)}
          >
            {name.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
