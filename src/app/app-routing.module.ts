import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './app-auth.module';


const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/layout/layout.module#LayoutModule'
    },
    { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './modules/signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './modules/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ] 
})

export class AppRoutingModule {}