require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Header from '../components/Header'

class AppComponent extends React.Component {
  render() {
    return (
        <div>
          <Header/>
          <div className="main">
            {this.props.children}
          </div>
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
