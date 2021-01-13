import { connect } from 'react-redux';
import Listings from '../components/Listings';
import {updateMap,deleteListing,updateLogStatus} from '../redux/actions'


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
        updateMap: (payload) => dispatch(updateMap(payload)),
        deleteListing: (index) => dispatch(deleteListing(index)),
        updateLogStatus: (payload) => dispatch(updateLogStatus(payload))
    }
}

    

export default connect(mapStateToProps,mapDispatchToProps)(Listings);