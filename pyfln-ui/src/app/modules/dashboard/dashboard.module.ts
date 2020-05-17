import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { YamlreadComponent } from './yamlread/yamlread.component';
import { ServerSummaryComponent } from './server-summary/server-summary.component';
import { FormsModule } from '@angular/forms';
import { HttpCommonService } from '../../services/http-common.service';
import { EditServerInfoComponent } from './edit-server-info/edit-server-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [IndexComponent, YamlreadComponent, ServerSummaryComponent, EditServerInfoComponent],
  providers: [ HttpCommonService]
})
export class DashboardModule { }
