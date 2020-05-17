import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { YamlreadComponent } from './yamlread/yamlread.component';
import { ServerSummaryComponent } from './server-summary/server-summary.component';
import { FormsModule } from '@angular/forms';
import { HttpCommonService } from '../../services/http-common.service';
import { EditServerInfoComponent } from './edit-server-info/edit-server-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [IndexComponent, YamlreadComponent, ServerSummaryComponent, EditServerInfoComponent],
  providers: [ HttpCommonService]
})
export class DashboardModule { }
