import React from 'react';
import { Announcement, Footer, Header } from './components';
import { HomePage } from './pages';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Announcement message="For Covid-19 related assistance, Please click here for any other assistance.you can contact our local Airlines reservation and ticketing offices." />
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}



export default App;
