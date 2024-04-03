import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CrptocurrenciesList = props => {
  const {cryptoList} = props
  return (
    <div className="table-container">
      <div className="table-head d-flex">
        <div className="coin-usd">
          <p>Coin Type</p>
          <p>USD</p>
        </div>
        <p className="eoru">EURO</p>
      </div>

      <ul className="ul-css">
        {cryptoList.map(eachItem => (
          <CryptocurrencyItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
    </div>
  )
}
export default CrptocurrenciesList
