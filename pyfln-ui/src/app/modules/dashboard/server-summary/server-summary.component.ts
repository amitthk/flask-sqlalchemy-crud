import { Component, OnInit } from '@angular/core';
import { HttpCommonService } from '../../../services/http-common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ServerSummaryModel } from '../../../models/user';

@Component({
  selector: 'app-server-summary',
  templateUrl: './server-summary.component.html',
  styleUrls: ['./server-summary.component.css']
})
export class ServerSummaryComponent implements OnInit {
  public error:any;
  public serverList: any;

  constructor(private httpService: HttpCommonService, private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    this.refreshList();
  }
  refreshList() {
    this.httpService.get("/api/mariadb/mariadb/serverSummary").map(res=> res.json()).subscribe(data=>{
      this.serverList=data;
    }, this.handleError, this.handleCompleted);
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
