import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'genral-information',
  templateUrl: './genral-information.component.html',
  styleUrls: ['./genral-information.component.css']
})
export class GenralInformationComponent implements OnInit {

 

  @Input() public genralInformation: FormGroup;
  personDetails: any;
  project_title:any;
  project_desc: any;
  watershed: any;
  project_county: any;
  Responsible_Reg: any;
  public ShowHide:boolean;
  constructor( private http: HttpClient) { }
  getResponse:any
  countyName:any

  ngOnInit(): void {
    this.ShowHide=false;
    this.http.get('http://localhost:9006/nofaapi/nofa/organization/getCounty')
    .subscribe(response => {
      this.getResponse = response;
      this.countyName = this.getResponse.data;
      console.log("Show county",this.countyName);
    });   

    const org_party_id = sessionStorage.getItem('OrgPartyID')
    const datavalue = {
      party_id: org_party_id
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/users/getAllDataByPartyIDIdAndRfpId', datavalue)
      .subscribe(response => {
        this.ShowHide=true;
        this.getResponse = response;
        this.personDetails = this.getResponse.data;
        // console.log("Show person", this.personDetails);
        sessionStorage.removeItem('RfpResponceID');
        sessionStorage.setItem('RfpResponceID', this.personDetails.RFPResponceId);

        this.project_title = this.personDetails.project_title
        this.project_desc = this.personDetails.project_desc
        this.watershed = this.personDetails.watershed
        this.project_county = this.personDetails.project_county
        this.Responsible_Reg = this.personDetails.Responsible_Reg


      })
  }

}
