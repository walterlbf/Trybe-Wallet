import React, { Component } from 'react';

const tableHeader = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

export default class HeaderList extends Component {
  render() {
    return (
      <thead>
        <tr>
          {tableHeader.map((indice, index) => (
            <th key={ index }>{indice}</th>
          ))}
        </tr>
      </thead>
    );
  }
}
