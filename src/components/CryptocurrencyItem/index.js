import './index.css'
const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = eachItem
  return (
    <li className="li-css-list di-flex-list">
      <div className="type-coin-list">
        <div className="d-flex-list">
          <img
            className="img-coin-list"
            src={currencyLogo}
            alt={currencyName}
          />
          <p>{currencyName}</p>
        </div>
        <p>{usdValue}</p>
      </div>
      <p className="euro">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
