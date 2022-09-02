import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'project-budget',
  templateUrl: './project-budget.component.html',
  styleUrls: ['./project-budget.component.css']
})
export class ProjectBudgetComponent implements OnInit {

  
  fund_request: any;
  local_cost: any;
  total_budget: any;
  duns_no: any;
  public ShowHide:boolean;
  @Input() public projectBudget: FormGroup;

  public ResponceID = sessionStorage.getItem("RfpResponceID")
  public  org_party_id = sessionStorage.getItem('OrgPartyID')

  constructor(private http: HttpClient){

  }
  
  // @ViewChild('password') public textbox: TextBoxComponent;
  getResponse: any;
  personDetails: any;

  public ngOnInit(): void {
    this.ShowHide=false;
    const datavalue = {
      party_id: this.org_party_id
    }

    this.http.post('http://localhost:9006/nofaapi/nofa/users/getAllDataByPartyIDIdAndRfpId', datavalue)
      .subscribe(response => {
        this.ShowHide=true;
        this.getResponse = response;
        this.personDetails = this.getResponse.data;
        console.log("Show person", this.personDetails);

        this.fund_request = this.personDetails.fund_request
        // console.log("fund req", this.personDetails.fund_request)
        this.local_cost = this.personDetails.local_cost
        this.total_budget = this.personDetails.total_budget
        this.duns_no = this.personDetails.duns_no

      })
  }

}
