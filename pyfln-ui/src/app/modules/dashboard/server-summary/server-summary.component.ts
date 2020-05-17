import { Component, OnInit } from '@angular/core';
import { HttpCommonService } from '../../../services/http-common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-server-summary',
  templateUrl: './server-summary.component.html',
  styleUrls: ['./server-summary.component.css']
})
export class ServerSummaryComponent implements OnInit {
  public error:any;
  public serverList: any;
  private sub:any;
  public page:Number;
  public id:Number;

  constructor(private httpService: HttpCommonService, private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    this.page=0
    this.sub = this.route.params.subscribe(params=>{
      this.id = params['id'];
    });
    if((this.route.snapshot.params.page)&&(this.route.snapshot.params.page.toString()!='-1')){
      this.page=this.route.snapshot.params.page
    }
    this.refreshList(this.page);
  }
  refreshList(page:Number) {
    this.httpService.get("/api/mariadb/mariadb/serverSummary?page="+page.toString()).map(res=> res.json()).subscribe(data=>{
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
