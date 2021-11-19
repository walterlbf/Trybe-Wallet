import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, fetchExpenses } from '../actions/index';

const tags = [
  'Alimentação',
  'Lazer', 'Trabalho',
  'Transporte',
  'Saúde',
];

const paymentMethod = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

class ExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.cleanForm = this.cleanForm.bind(this);
    this.addId = this.addId.bind(this);

    this.state = {
      id: 0,
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Aliementação',
      description: '',
    };
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  cleanForm() {
    document.getElementById('form1').reset();
  }

  addId() {
    this.setState((prev) => ({
      id: prev.id + 1,
    }));
  }

  render() {
    const { currencies, fetchExpense } = this.props;
    return (
      <form className="form" id="form1">
        <label htmlFor="value">
          Valor
          <input type="number" name="value" onChange={ this.handleChange } id="value" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency" onChange={ this.handleChange }>
            {currencies.map((curr, index) => (
              <option key={ index }>{ curr.code }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" name="method" onChange={ this.handleChange }>
            {paymentMethod.map((option, index) => (
              <option key={ index }>{option}</option>
            )) }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" onChange={ this.handleChange }>
            {tags.map((option, index) => (
              <option key={ index }>{option}</option>
            )) }
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            onChange={ this.handleChange }
            id="description"
          />
        </label>
        <button
          type="button"
          onClick={ () => { this.cleanForm(); this.addId(); fetchExpense(this.state); } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencies()),
  fetchExpense: (payload) => dispatch(fetchExpenses(payload)),
});

ExpensesForm.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
  fetchExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
