import React from 'react';
import Popup from './Popup/Popup';

const Sort = ({ sortNameId, setSortNameId }) => {
  const [popupHidden, setPopupHidden] = React.useState(true);

  const sortNames = [
    { id: 0, sortType: 'rating', orderType: 'asc', text: 'популярности' },
    {
      id: 1,
      sortType: 'rating',
      orderType: 'desc',
      text: 'популярности по убыванию',
    },
    { id: 2, sortType: 'price', orderType: 'asc', text: 'цене' },
    { id: 3, sortType: 'price', orderType: 'desc', text: 'цене по убыванию' },
    { id: 4, sortType: 'name', text: 'алфавиту' },
  ];

  const handleSortType = (id) => {
    let sortTypeFound;
    let orderTypeFound;

    sortNames.forEach((item) =>
      item.id === id
        ? (sortTypeFound = item.sortType) && (orderTypeFound = item.orderType)
        : null
    );

    setSortNameId({
      id: id,
      sortType: sortTypeFound,
      orderType: orderTypeFound,
    });

    handlePopup();
  };

  const sortedItem = sortNames.map((item) =>
    item.id === sortNameId.id ? item.text : null
  );

  const handlePopup = () => setPopupHidden(!popupHidden);

  const popupRef = React.useRef();

  (function useOutsidePopup(ref) {
    React.useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setPopupHidden(true);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  })(popupRef);

  return (
    <div className="sort" ref={popupRef}>
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
        handleSortType={handleSortType}
        handlePopup={handlePopup}
        popupRef={popupRef}
      />
    </div>
  );
};

export default Sort;
