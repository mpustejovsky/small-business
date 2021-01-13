import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { updateLogStatus } from '../redux/actions';




const mapStateToProps = (state) => {
	return {
    userInfo: state.userInfo,
    listings:state.listings,
    map:state.map,
    logStatus:state.logStatus
    
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateLogStatus: (payload) => dispatch(updateLogStatus(payload))
    }
}

    

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);