import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.css']
})
export class FundingComponent implements OnInit {

  // public countries: Array<string> = countries;
  
    @Input() public fundinDetails: FormGroup;

    constructor(private httpClient: HttpClient){}
    public ResponceId = sessionStorage.getItem('RfpResponceID')

    fundingValue:false

    fieldsChange(values:any):void {
        console.log("get VALUE",values.currentTarget.checked);
        this.fundingValue = values.currentTarget.checked

        if(this.fundingValue){
            const datavalue ={
                rfp_id: 12,
                rfp_responce_id: this.ResponceId
            }
            this.httpClient.post('http://localhost:9006/nofaapi/nofa/funding/createFundingProgram',datavalue).subscribe(
                 result=>{
                
                // console.log("funding True");
                // this.message=this.custService.message;
              })
        }else{
            const datavalue ={
                rfp_id: 12,
                rfp_responce_id: this.ResponceId
            }
            this.httpClient.post('http://localhost:9006/nofaapi/nofa/funding/deleteRfpFundItem',datavalue).subscribe(
                 result=>{               
               
                // this.message=this.custService.message;
              })
        }
      }

      public ngOnInit(): void {
      }

}
