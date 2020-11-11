import HelloWorld from "../components/HelloWorld";
import Users from "../components/Users";
import User from "../components/User";
import EditUser from "../components/EditUser";

export const routes = [
    {
        path: '',
        component: HelloWorld
    },
    {
        path: '/users',
        component: Users,
        children: [
            {
                path: ':id',
                component: User
            },
            {
                path: ':id/edit',
                component: EditUser
            }
        ]
    }
]
