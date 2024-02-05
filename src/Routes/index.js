//Layouts
import { HeaderOnly } from '~/components/Layouts';

//Pages
import Following from '~/Pages/Following';
import Home from '~/Pages/Home';
import Upload from '~/Pages/Upload';
import Profile from '~/Pages/Profile'

//Public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/profile',
        component: Profile,
        layout: null
    }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
