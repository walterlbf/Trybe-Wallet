import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import expensesForm from './ExpensesForm';

class Wallet extends React.Component {
  render() {
    const { email, expensesTotal } = this.props;
    console.log(email);
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span
            data-testid="total-field"
          >
            {`Total: 
           ${expensesTotal.reduce((acc, curr) => Number(acc) + Number(curr.value), 0)}` }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <expensesForm />
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
