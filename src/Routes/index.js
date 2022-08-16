import Home from '../pages/Home'
import Following from '../pages/Following'
import Upload from '../pages/Upload'

import HeaderOnly from '../components/Layout/HeaderOnly'


//Page don't need to login
const publicRoutes = [
    {path: '/', component: Home },
    {path: '/following', component: Following },
    {path: '/upload', component: Upload, layout: HeaderOnly }
]


//Page need to login
const privateRoutes = [

]


export { publicRoutes, privateRoutes } 