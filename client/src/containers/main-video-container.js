import { connect } from 'react-redux';
import _ from 'lodash';

import MainVideo from '../components/media/main-video.jsx';

const mapStateToProps = (state, props) => {
  return {
    activeVideo : state.video
  };
};

export default connect(mapStateToProps)(MainVideo);
