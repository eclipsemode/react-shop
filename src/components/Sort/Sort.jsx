import React from 'react';
import Popup from './Popup/Popup';

const Sort = () => {
  const [popupHidden, setPopupHidden] = React.useState(true);
  const [sortNameId, setSortNameId] = React.useState(0);

  const sortNames = [
    { id: 0, text: 'популярности' },
    { id: 1, text: 'цене' },
    { id: 2, text: 'алфавиту' },
  ];

  const sortedItem = sortNames.map((item) =>
    item.id === sortNameId ? item.text : null
  );

  const handlePopup = () => {
    setPopupHidden(!popupHidden);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        {popupHidden ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
            id="IconChangeColor"
          >
            <path
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              id="mainIconPathAttribute"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
            id="IconChangeColor"
            transform="rotate(180)"
          >
            <path
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              id="mainIconPathAttribute"
            ></path>
          </svg>
        )}
        <b>Сортировка по:</b>
        <span onClick={() => handlePopup()}>{sortedItem}</span>
      </div>
      <Popup
        className="sort__popup"
        popupHidden={popupHidden}
        sortNames={sortNames}
        sortNameId={sortNameId}
        setSortNameId={setSortNameId}
        handlePopup={handlePopup}
      />
    </div>
  );
};

export default Sort;
