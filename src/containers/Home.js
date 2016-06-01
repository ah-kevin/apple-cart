/**
 * Created by dg_lennon on 16/5/31.
 */
import React, {
  Component,
  PropTypes
} from 'react';
let yeomanImage = require('../images/yeoman.png');
class Home extends Component {
  render () {
    return (
        <div className="index">
          <img src={yeomanImage} alt="Yeoman Generator" />
          <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        </div>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
