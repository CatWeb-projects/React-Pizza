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
    setFiltered,
    saveFilteredCategory,
    setSaveFilteredCategory
  } = React.useContext(PizzaContext);

  const [selectType, setSelectType] = React.useState<string>('popularity');

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

    const sortFn = (type: string) => {
      const types: any = {
        popularity: 'rating',
        price_asc: 'price',
        price_desc: 'price',
        name: 'name'
      };

      const sortProperty = types[type];

      pizzas.sort((a: any, b: any) => {
        if (type === 'name') {
          return a.name.localeCompare(b.name);
        }
        if (type === 'price_asc') {
          return a.price - b.price;
        }
        return b[sortProperty] - a[sortProperty];
      });
    };

    setFiltered(filteredPizzas);
    sortFn(selectType);
    // eslint-disable-next-line
  }, [pizzas, saveFilteredCategory, selectType]);

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
        <select onChange={(e) => setSelectType(e.target.value)}>
          <option value="popularity">По популярности</option>
          <option value="price_asc">По возрастающей цене</option>
          <option value="price_desc">По убывающей цене</option>
          <option value="name">По алфавиту</option>
        </select>
      </div>
    </div>
  );
};
