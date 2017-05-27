import React   from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';
import { withRouter }       from 'react-router-dom'

import { setDocumentTitle, renderErrorsFor } from '../../utils';

class ChallengesShow extends React.Component {
  componentDidMount() {
    setDocumentTitle('Challenge Show');
  }

  render() {
    const {currentChallenge} = this.props;
    return <p>{currentChallenge.prompt}</p>
  }
}

function mapStateToProps(state) {
  return {currentChallenge: state.challenges.currentChallenge}
}

export default withRouter(connect(mapStateToProps)(ChallengesShow));

