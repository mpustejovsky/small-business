import { connect } from 'react-redux';
import Home from '../components/Home';






const mapStateToProps = (state) => {
	return {
    userInfo: state.userInfo,
    listings:state.listings,
    map:state.map,
    logStatus:state.logStatus
    
	};
};


    

export default connect(mapStateToProps,null)(Home);