import config from '~/configRoutes';
//Layouts
import { HeaderOnly } from '~/layouts';

//Pages
import Following from '~/Pages/Following';
import Home from '~/Pages/Home';
import Upload from '~/Pages/Upload';
import Profile from '~/Pages/Profile';
import Live from '~/Pages/Live';
import Friends from '~/Pages/Friends';
import Explore from '~/Pages/Explore';

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
    {
        path: config.routes.friends,
        component: Friends,
    },
    {
        path: config.routes.explore,
        component: Explore,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
