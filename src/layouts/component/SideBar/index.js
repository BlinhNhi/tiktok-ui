import Menu, { MenuItem } from './Menu';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAcounts from '~/components/SuggestedAccounts';
import config from '~/config';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {/* do icon là 1 prop component nên ko thể truyền vào đc */}
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon></HomeIcon>}
                    activeIcon={<HomeActiveIcon></HomeActiveIcon>}
                ></MenuItem>

                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon></UserGroupIcon>}
                    activeIcon={<UserGroupActiveIcon></UserGroupActiveIcon>}
                ></MenuItem>

                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon></LiveIcon>}
                    activeIcon={<LiveActiveIcon></LiveActiveIcon>}
                ></MenuItem>
            </Menu>

            <SuggestedAcounts label="Suggested Accounts"></SuggestedAcounts>
            {/* <SuggestedAcounts label="Following"></SuggestedAcounts> */}
        </aside>
    );
}

export default SideBar;
