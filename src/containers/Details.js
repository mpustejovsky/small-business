import { connect } from 'react-redux';
import Details from '../components/Details';





const mapStateToProps = (state) => {
	return {
    userInfo: state.userInfo,
    listings:state.listings,
    map:state.map
    
	};
};




    

export default connect(mapStateToProps,null)(Details);