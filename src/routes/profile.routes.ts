import { Routes } from "@angular/router";
import { ROUTES } from "@app/constants/routes.cont";
import { ProfilePage } from "@app/UI/profile/profile.page";

export const profileRoutes: Routes = [
    {
        path: '',
        component: ProfilePage
    }
]