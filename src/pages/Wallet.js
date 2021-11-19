import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesForm from './ExpensesForm';
import NewExpense from './NewExpense';

class Wallet extends Component {
  totalChange() {
    const { expensesTotal } = this.props;
    const values = expensesTotal.reduce((acc, curr) => {
      console.log(expensesTotal);
      const change = curr.exchangeRates[curr.currency];
      console.log(change);
      return (Number(acc) + Number(curr.value * change)).toFixed(2);
    }, 0);
    return values;
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{`Email: ${email}`}</span>
          <span
            data-testid="total-field"
          >
            {`Despesa total: R$ 
            ${this.totalChange()}`}
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <ExpensesForm />
        <NewExpense />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expensesTotal: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expensesTotal: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
