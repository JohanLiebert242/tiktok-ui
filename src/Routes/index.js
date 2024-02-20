import routesConfig from '~/configRoutes/routes';

//Layouts
import { HeaderOnly } from '~/components/Layouts';

//Pages
import Following from '~/Pages/Following';
import Home from '~/Pages/Home';
import Upload from '~/Pages/Upload';
import Profile from '~/Pages/Profile';

//Public Routes
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
