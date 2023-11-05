import config from '~/config';
// Layout Only
import { HeaderOnly } from '~/layouts';
// Layout Default
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
]; // chứa những routes public

const privateRoutes = []; // chứa những routes private

export { publicRoutes, privateRoutes };
