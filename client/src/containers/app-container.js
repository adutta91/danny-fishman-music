import { connect } from 'react-redux';
import _ from 'lodash';

import App from '../components/app.jsx';

const mapStateToProps = (state, props) => {
  return {
    page   : state.page || props.match.params.page,
    loaded : state.loaded
  };
};

export default connect(mapStateToProps)(App);
