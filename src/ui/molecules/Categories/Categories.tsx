import React from 'react';
import { PizzaContext, pizzas } from 'contexts/PizzaContext';
import { Button } from 'ui/atoms/Button/Button';

import './Categories.scss';

const buttonInfo = [
  {
    id: 1,
    title: 'Все',
    category: 0
  },
  {
    id: 2,
    title: 'Мясные',
    category: 1
  },
  {
    id: 3,
    title: 'Вегетарианская',
    category: 2
  },
  {
    id: 4,
    title: 'Гриль',
    category: 3
  },
  {
    id: 5,
    title: 'Острые',
    category: 4
  },
  {
    id: 6,
    title: 'Закрытые',
    category: 5
  }
];

export const Categories = () => {
  const {
    filtered,
    setFiltered,
    saveFilteredCategory,
    setSaveFilteredCategory
  } = React.useContext(PizzaContext);

  const onToggleFilters = React.useCallback(
    (category: number) => {
      pizzas.map((pizza) => {
        if (pizza.category === category) {
          setSaveFilteredCategory(category);
        }
        if (category === 0) {
          setSaveFilteredCategory(category);
          setFiltered(pizzas);
        }
        return null;
      });
    },
    // eslint-disable-next-line
    []
  );

  React.useEffect(() => {
    const filteredPizzas = pizzas.filter((pizza) => {
      if (pizza.category === saveFilteredCategory) {
        return true;
      }
      return false;
    });

    setFiltered(filteredPizzas);
    // eslint-disable-next-line
  }, [pizzas, saveFilteredCategory]);

  console.log(saveFilteredCategory, 'save the category');
  console.log(filtered, 'filtering');

  return (
    <div className="categories-container">
      <div className="categories-container__buttons">
        {buttonInfo &&
          buttonInfo.map((button) => (
            <Button
              key={button.id}
              onClick={() => onToggleFilters(button.category)}
              className={
                button.category === saveFilteredCategory ? 'active-filter' : ''
              }
            >
              {button.title}
            </Button>
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
