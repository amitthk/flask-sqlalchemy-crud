import { Component, OnInit } from '@angular/core';
import { ServerSummaryModel } from '../../../models/index';
import { HttpCommonService } from '../../../services/http-common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server-info',
  templateUrl: './edit-server-info.component.html',
  styleUrls: ['./edit-server-info.component.css']
})
export class EditServerInfoComponent implements OnInit {

  public serverInfoModel:ServerSummaryModel;
  private sub:any;
  public error:any;
  public selectedId:Number;

  constructor(private httpService: HttpCommonService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadEditModel()
    
  }
  loadEditModel() {
    this.sub = this.route.params.subscribe(params=>{
      this.selectedId = params['id'];
      if((this.selectedId)&&(this.selectedId.toString()!='-1')){
        this.httpService.get('/api/mariadb/mariadb/serverSummary?id='+this.selectedId).map(
          resp=> resp.json())
          .subscribe(data=>{
            this.serverInfoModel=data[0];
          })
      }else{
        this.serverInfoModel = new ServerSummaryModel();
      }
    },this.handleError,this.handleCompleted);
  }

  public submitForm(){
    this.httpService.post('/api/mariadb/mariadb/serverSummary',this.serverInfoModel).map(
      resp=> resp.json())
      .subscribe(data=>{
        this.serverInfoModel=data[0];
      },this.handleError,this.handleCompleted);
  }

  handleError(error: any) {
    console.log("An error occurred", error);
    alert('Error: '+error);
    this.error=error;
  }
  handleCompleted() {
    console.log("REquest completed.")
  }

}
