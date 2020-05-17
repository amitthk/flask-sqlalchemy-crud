import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './modules/dashboard/index/index.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ServerSummaryComponent } from './modules/dashboard/server-summary/server-summary.component';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent},
    { path: 'login', component: LoginComponent },
    { path: 'server-summary', component: ServerSummaryComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
