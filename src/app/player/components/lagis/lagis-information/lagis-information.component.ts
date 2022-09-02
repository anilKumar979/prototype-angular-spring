import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lagis-information',
  templateUrl: './lagis-information.component.html',
  styleUrls: ['./lagis-information.component.css']
})
export class LagisInformationComponent implements OnInit {

  senateDist: any;
  assemblyDist: any;
  RespSenet: any;
  RespAssembly: any;
  UscongressDist: any;
  RespUscongress: any;
  getResponse: any;
  personDetails: any;

  senet_dist: any
  assembly_dist: any
  us_cong_dist: any

  legislative_value: any
  assembly_value: any
  us_cong_value: any

  constructor(private http: HttpClient) { }
  public ResponceId = sessionStorage.getItem('RfpResponceID')
  public org_party_id = sessionStorage.getItem('OrgPartyID')

  @Input()
  public legisInformation: FormGroup;

  ngOnInit(): void {
    this.http.get('http://localhost:9006/nofaapi/nofa/Legislatives/getSenateDistrict')
      .subscribe(response => {
        this.RespSenet = response;
        this.senateDist = this.RespSenet.data;
        console.log("Show county", this.senateDist);
      });

    this.http.get('http://localhost:9006/nofaapi/nofa/Legislatives/getAssemblyDistrict')
      .subscribe(res => {
        this.RespAssembly = res;
        this.assemblyDist = this.RespAssembly.data;
        console.log("Show assembly", this.senateDist);
      });

    this.http.get('http://localhost:9006/nofaapi/nofa/Legislatives/getUSCongressionalDistrict')
      .subscribe(res => {
        this.RespUscongress = res;
        this.UscongressDist = this.RespUscongress.data;
        console.log("Show assembly", this.UscongressDist);
      });
    // ---------------------------Get All legilative value --------------------

    const datavalue = {
      party_id: this.org_party_id
    }

    this.http.post('http://localhost:9006/nofaapi/nofa/users/getAllDataByPartyIDIdAndRfpId', datavalue)
      .subscribe(response => {
        this.getResponse = response;
        this.personDetails = this.getResponse.data;
        console.log("Show person", this.personDetails);
        // console.log('senet_dist id', this.personDetails.senet_dist)

        this.senet_dist = this.personDetails.senet_dist

        // console.log("senet_dist", this.senet_dist)
        this.assembly_dist = this.personDetails.assembly_dist
        this.us_cong_dist  = this.personDetails.us_cong_dist
        console.log("us_cong_dist", this.us_cong_dist)


        this.legislative_value = this.personDetails.legislative_value
        this.assembly_value = this.personDetails.assembly_value
        this.us_cong_value  = this.personDetails.us_cong_value      

      });
      

  }
  public handleChangeSenet(value: any): void {
    console.log("valueChange", value);

    const datavalue = {
      rfp_responce_id: this.ResponceId ,
      leg_type_id:"3",
      rfp_leg_type_id:"1",
      leg_name:value
    }

    this.http.post('http://localhost:9006/nofaapi/nofa/Legislatives/createRfpLegislativeInformation', datavalue)
      .subscribe(response => {
        // this.getResponse = response;
        // this.personDetails = this.getResponse.data;
        // console.log("Show person", this.personDetails);
      })
  }

  public valueChangeAssembly(value: any) {
    console.log("assembly value", value);

    const datavalue = {
      rfp_responce_id: this.ResponceId,
      leg_type_id: '4',
      rfp_leg_type_id: '1',
      leg_name:value
    }

    this.http.post('http://localhost:9006/nofaapi/nofa/Legislatives/createRfpLegislativeInformation', datavalue)
      .subscribe(response => {
        // this.getResponse = response;
        // this.personDetails = this.getResponse.data;
        // console.log("Show person", this.personDetails);
      })
  }

  public valueChangeUs(value: any) {
    console.log("assembly value", value);

    const datavalue = {
      rfp_responce_id: this.ResponceId,
      leg_type_id: '2',
      rfp_leg_type_id: '1',
      leg_name:value
    }

    this.http.post('http://localhost:9006/nofaapi/nofa/Legislatives/createRfpLegislativeInformation', datavalue)
      .subscribe(response => {
        // this.getResponse = response;
        // this.personDetails = this.getResponse.data;
        // console.log("Show person", this.personDetails);
      })
  }
}
