import React from 'react';

const Popup = ({ popupHidden, sortNames, ...props }) => {
  return (
    <div hidden={popupHidden} className={props.className}>
      <ul>
        {sortNames.map((name) => (
          <li
            key={name.id}
            className={props.sortNameId === name.id ? 'active' : ''}
            onClick={() => props.handleSortType(name.id)}
          >
            {name.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
