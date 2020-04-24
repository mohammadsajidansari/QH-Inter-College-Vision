import React, { Component } from 'react';
import styles from './App.module.css';
import { fetchData } from './api/index';

import { Cards, Chart, CountryPicker } from './components';
import Header from './header/header';
import Bottom from './bottom/bottom';
import WhatsApp from './Image/WhatsApp.jpeg';

class App extends Component  {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount () {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({data: fetchedData, country: country});
  }
  render () {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Header />
       <img src={WhatsApp} alt="covid-19" className={styles.mainImage} />
      <Cards data={data} />
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Chart  data={data} country={country} />
      <Bottom />
      </div>
    );
  }
}

export default App;
