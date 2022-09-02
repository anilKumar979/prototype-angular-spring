import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {

  
  constructor(private http: HttpClient) { }
  getResponse:any
  personDetails:any
  
  pd_first_name:any
  pd_last_name:any;
  pd_phone:any;
  pd_fax:any;
  pd_email:any
  pd_cemail:any
  pm_first_name:any;
  pm_last_name:any;
  pm_phone:any;
  pm_fax:any;
  pm_email:any;
  pm_cemail:any;

  @Input() public projectmanage: FormGroup;
  public ResponceId = sessionStorage.getItem('RfpResponceID')
    public org_party_id = sessionStorage.getItem('OrgPartyID')

  ngOnInit(): void {
    const datavalue ={
      party_id: this.org_party_id
    }

    this.http.post('http://localhost:9006/nofaapi/nofa/users/getAllDataByPartyIDIdAndRfpId',datavalue)
    .subscribe(response => {
      this.getResponse = response;
      this.personDetails = this.getResponse.data;
      console.log("Show person",this.personDetails);
      console.log('responce id', this.personDetails.RFPResponceId)

      this.pd_first_name = this.personDetails.pd_first_name
      this.pd_last_name = this.personDetails.pd_last_name
      this.pd_email = this.personDetails.pd_email;
      this.pd_phone =this.personDetails.pd_phone;
      this.pd_fax  = this.personDetails.pd_fax;
      this.pd_cemail = this.personDetails.pd_cemail;

      this.pm_first_name = this.personDetails.pm_first_name
      this.pm_last_name = this.personDetails.pm_last_name
      this.pm_email = this.personDetails.pm_email;
      this.pm_cemail =this.personDetails.pm_cemail;
      this.pm_fax  = this.personDetails.pm_fax;
      this.pm_phone = this.personDetails.pm_phone;
    });   

    console.log("lastname", this.pd_first_name)
    
  }


}
