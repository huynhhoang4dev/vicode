import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NganhHangComponent } from './pages/nganh-hang/nganh-hang.component';
import { LayoutModule } from './layout.module';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: NganhHangComponent
            },
            {
                path: 'nganh-hang',
                component: NganhHangComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class LayoutRoutingModule {}