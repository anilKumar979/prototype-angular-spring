import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measure-table-tab',
  templateUrl: './measure-table-tab.component.html',
  styleUrls: ['./measure-table-tab.component.css']
})
export class MeasureTableTabComponent implements OnInit {
  Purpose: any;
  PurposeList: any;

  

  constructor(public http: HttpClient) { }
  // public http: HttpClient

  public userName =  sessionStorage.getItem('User')

  public checkComment: boolean
  

  public ResponceId = sessionStorage.getItem('RfpResponceID')
  public org_party_id = sessionStorage.getItem('OrgPartyID')

  ngOnInit(): void {
    console.log("user",  this.userName)
    this.checkComment = false

    // this.checkfrun
  }

  deletePerformance(Valueid:any, AttId:any){

    // console.log("the performance id", Valueid , AttId)

    const datavalue = {
      rfp_responce_value_id: Valueid,
      rfp_responce_att_id: AttId
    }

    this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/deletePerformAttAndvalueById',datavalue)
    .subscribe(response => {
      // this.Purpose = response;
      // this.PurposeList = this.Purpose.data;
      this.MeasureTableView;
    })

  }
 
  MeasureTableView(key: string){
    console.log('Call Function One from Component One', key);
    if(key === 'Comments'){
      this.checkComment =  true
    }
    

    const datavalue ={
      rfp_responce_id: this.ResponceId,
      Name : key
  }
    this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/getPerMeasureListbyMeasureID',datavalue)
    .subscribe(response => {
      this.Purpose = response;
      this.PurposeList = this.Purpose.data;
    })

  }

}
