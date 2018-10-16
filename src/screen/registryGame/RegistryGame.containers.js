import {connect} from 'react-redux';
import RegistryGame from './RegistryGame';
import {addUser} from "./RegistryGame.modules";

const mapDispatchToProps = {
    addUser
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistryGame)
