import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Item {
  role: string;
  id: number;
}
@Component({
  selector: 'cooperating-entities',
  templateUrl: './cooperating-entities.component.html',
  styleUrls: ['./cooperating-entities.component.css']
})
export class CooperatingEntitiesComponent implements OnInit {

  @Input()
  public cooperatingEntities: FormGroup;

  constructor(private http: HttpClient){}

  public ResponceId = sessionStorage.getItem('RfpResponceID')
  public org_party_id = sessionStorage.getItem('OrgPartyID')

  public Rolecontribution : Array<Item> = [{id: 1 , role: 'COOPERATING ROLE'}]

co_org_name:any
co_first_name:any
co_last_name:any
co_cotect_ph:any
co_email:any
  getResponse: any;
  personDetails: any;
  role_contribution:any


  ngOnInit(): void {

    const datavalue = {
      rfp_responce_id: this.ResponceId
        }

    this.http.post('http://localhost:9006/nofaapi/nofa/cooperating/getAllCoopratingContactbyRespID', datavalue)
      .subscribe(response => {
        this.getResponse = response;
        this.personDetails = this.getResponse.data;
        console.log("Show person", this.personDetails[0]);

        this.co_org_name = this.personDetails[0].NAME
        // console.log("fund req", this.personDetails.fund_request)
        this.co_first_name = this.personDetails[0].FIRST_NAME
        this.co_last_name = this.personDetails[0].LAST_NAME
        this.co_email = this.personDetails[0].EMAIL_ADDRESS
        this.co_cotect_ph = this.personDetails[0].PHONE_NUMBER

      })
  }
}
