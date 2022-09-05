import React, { useState } from 'react';
import { Container, CheckBox } from '../FilterByPrice/styles';

const FilterByPrice = () => {
  const [checked, setChecked] = useState([]);
  const checkList = [
    'Até R$40',
    'R$40 A R$60',
    'R$100 A R$200',
    'R$200 A R$500',
    'Acima de R$500',
  ];

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ', ' + item;
      })
    : '';

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? 'checked-item' : 'not-checked-item';

  return (
    <Container>
      <h2>Refine sua busca</h2>
      <div>
        <h3>Por preço</h3>
        <div className="list-container">
          {checkList.map((item, index) => (
            <CheckBox key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </CheckBox>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FilterByPrice;
