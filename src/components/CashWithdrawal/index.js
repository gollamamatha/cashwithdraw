// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevstate => ({balance: prevstate.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const inital = name.slice(0, 1)

    return (
      <div className="app_container">
        <div className="cash_container">
          <div className="user_container">
            <div className="initial-container">
              <p className="inital">{inital}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance_container">
            <p className="your_balance">Your Balance</p>
            <p className="balance">
              <span className="span">{balance}</span>
              <br />
              In Rupees
            </p>
          </div>

          <p className="withdrawal">Withdraw</p>
          <p className="choose_rupees">CHOOSE SUM(IN RUPEES)</p>
          <ul className="denomination_list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
