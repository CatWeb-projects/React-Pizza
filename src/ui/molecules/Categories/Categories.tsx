import React from 'react';
import { Button } from 'ui/atoms/Button/Button';
import './Categories.scss';

export const Categories = () => {
  const buttonInfo = [
    {
      id: 1,
      title: 'Все'
    },
    {
      id: 2,
      title: 'Мясные'
    },
    {
      id: 3,
      title: 'Вегетарианская'
    },
    {
      id: 4,
      title: 'Гриль'
    },
    {
      id: 5,
      title: 'Острые'
    },
    {
      id: 6,
      title: 'Закрытые'
    }
  ];

  return (
    <div className="categories-container">
      <div className="categories-container__buttons">
        {buttonInfo &&
          buttonInfo.map((button: any, i) => (
            <Button key={i + 1} title={button.title} />
          ))}
      </div>
      <div className="categories-container__select">
        <i className="fas fa-sort-up"></i>
        <span>Сортировка по:</span>
        <select>
          <option value="Popularity">По популярности</option>
          <option value="price">По цене</option>
          <option value="price">По алфавиту</option>
        </select>
      </div>
    </div>
  );
};
