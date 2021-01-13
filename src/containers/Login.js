import { connect } from 'react-redux';
import Login from '../components/Login';
import {updateUserInfo} from '../redux/actions'



const mapStateToProps = (state) => {
	return {
    userInfo: state.userInfo,
    listings:state.listings
    
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserInfo: (payload) => dispatch(updateUserInfo(payload))
    }
}

    

export default connect(mapStateToProps,mapDispatchToProps)(Login);