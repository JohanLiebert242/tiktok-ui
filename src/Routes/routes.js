import config from '~/configRoutes';
//Layouts
import { HeaderOnly } from '~/layouts';

//Pages
import Following from '~/Pages/Following';
import Home from '~/Pages/Home';
import Upload from '~/Pages/Upload';
import Profile from '~/Pages/Profile';

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
