import React from 'react';
import Footer from './Footer.jsx';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {

    return (
      <div>
        <h1>
          AppComponent
        </h1>
        <div>
          поисковая строка
        </div>
        <div>
          кропка искать
        </div>
        <Footer />
      </div>
  );
  }
}

module.exports = AppComponent;
