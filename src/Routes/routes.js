import config from '~/configRoutes';
//Layouts
import { HeaderOnly } from '~/layouts';

//Pages
import Following from '~/Pages/Following';
import Home from '~/Pages/Home';
import Upload from '~/Pages/Upload';
import Profile from '~/Pages/Profile';
import Live from '~/Pages/Live';

//Public Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.live,
        component: Live,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
