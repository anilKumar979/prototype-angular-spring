import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input()
  public contactPage: FormGroup;

  constructor(private http: HttpClient){}

cont_org_name:any
cont_first_name:any
cont_last_name:any
cont_phone:any
cont_email:any
  getResponse: any;
  personDetails: any;

  public ResponceId = sessionStorage.getItem('RfpResponceID')
  public org_party_id = sessionStorage.getItem('OrgPartyID')

  ngOnInit(): void {

    const datavalue = {
      rfp_responce_id: this.ResponceId
    }

    this.http.post('http://localhost:9006/nofaapi/nofa/contact/getAllProjectContactbyRespID', datavalue)
      .subscribe(response => {
        this.getResponse = response;
        this.personDetails = this.getResponse.data;
        console.log("Show person", this.personDetails[0]);

        this.cont_org_name = this.personDetails[0].NAME
        // console.log("fund req", this.personDetails.fund_request)
        this.cont_first_name = this.personDetails[0].FIRST_NAME
        this.cont_last_name = this.personDetails[0].LAST_NAME
        this.cont_email = this.personDetails[0].EMAIL_ADDRESS
        this.cont_phone = this.personDetails[0].PHONE_NUMBER

      })
  }
  }


