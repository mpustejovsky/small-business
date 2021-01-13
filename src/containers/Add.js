import { connect } from 'react-redux';
import Add from '../components/Add';
import {updateList} from '../redux/actions'




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
        updateList: (payload) => dispatch(updateList(payload))
    }
}

    

export default connect(mapStateToProps,mapDispatchToProps)(Add);