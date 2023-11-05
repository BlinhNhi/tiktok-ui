import PropTypes from 'prop-types';
//children là MenuItem trong SideBar
function Menu({ children }) {
    return <nav>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Menu;
