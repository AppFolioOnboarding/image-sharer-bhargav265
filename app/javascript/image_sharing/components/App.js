import React, { Component } from 'react';
import Header from './Header';
import FormComponent from './FormComponent';
import Footer from './Footer';

class App extends Component {
  /* Add Prop Types check*/
  render() {
    return (
      <div>
        <Header title={'Tell us what you think'} />
        <FormComponent/>
        <Footer title={'Copyright: AppFolio Inc. Onboarding'} />
      </div>
    )
  }
}

export default App;
