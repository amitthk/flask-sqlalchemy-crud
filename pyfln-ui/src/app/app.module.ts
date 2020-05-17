import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module'
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpCommonService } from './services/http-common.service';
import { HttpModule } from '@angular/http';
import { AuthenticationService, AlertService } from './services';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AuthModule,
    FormsModule,
    DashboardModule
  ],
  providers: [HttpCommonService,AuthenticationService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
