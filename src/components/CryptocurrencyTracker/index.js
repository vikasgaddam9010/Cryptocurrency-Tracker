import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CrptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoList: [], isLoaderActive: true}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const rawData = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const jsonData = await rawData.json()
    const updatedData = jsonData.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    console.log(updatedData)
    this.setState({cryptoList: updatedData, isLoaderActive: false})
  }
  render() {
    const {cryptoList, isLoaderActive} = this.state
    return (
      <div className="bg-container">
        {isLoaderActive ? (
          <div data-testid="loader">
            <Loader
              type="TailSpin"
              color="#FFFFFF"
              height={50}
              width={50}
            ></Loader>
          </div>
        ) : (
          <div className="bg-crypto">
            <h1 className="head">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-logo"
            />
            <CrptocurrenciesList cryptoList={cryptoList} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
