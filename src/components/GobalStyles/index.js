import PropTypes from 'prop-types';
import './GobalStyles.scss';
function GobalStyles({ children }) {
    return children;
}

GobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GobalStyles;
