import {bindActionCreators} from 'redux';
import {connect as Connect} from 'react-redux';

// Constants
import ActionTypes from 'action_types';

// Actions
import AppActions from 'app_actions';

// Components
import App from '../components/app';

const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(AppActions, dispatch);
};

@Connect(mapStateToProps, mapDispatchToProps)
export default class AppContainer extends React.Component {
  constructor() {
    super();
  }

  _searchCraigslist(e) {
    const val = e.target.value;
    this.props.searchCraigslist(val);
  }

  render() {
    console.log('[app_container] this.props: ', this.props);
    const {
      dispatch,
      app,
    } = this.props;

    return (
      <App
        {...app}
        searchCraigslist={::this._searchCraigslist}
      />
    );
  }
}

AppContainer.displayName = 'AppContainer';

AppContainer.propTypes = {
  dispatch: React.PropTypes.func,
  finances: React.PropTypes.object,
};
