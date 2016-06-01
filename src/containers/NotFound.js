/**
 * Created by dg_lennon on 16/5/31.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Link} from 'react-router';
class NotFound extends Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>This is a demo 404 page!</h1>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    );
  }
}

NotFound.propTypes = {};
NotFound.defaultProps = {};

export default NotFound;
