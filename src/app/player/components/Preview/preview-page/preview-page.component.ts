import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.css']
})
export class PreviewPageComponent implements OnInit {

  @Input() public previewPage: FormGroup;
  getResponse: any;
  personDetails: any;
  project_title: any;
  project_desc: any;
  watershed: any;
  project_county: any;
  Responsible_Reg: any;
  fund_request: any;
  local_cost: any;
  total_budget: any;
  duns_no: any;
  fund_request_check: any;
  senet_dist: any;
  assembly_dist: any;
  us_cong_dist: any;
  legislative_value: any;
  assembly_value: any;
  us_cong_value: any;
  cont_org_name: any;
  cont_first_name: any;
  cont_phone: any;
  co_org_name: any;
  role_contribution: any;
  co_first_name: any;
  co_cotect_ph: any;
  
  //-------Questionnaire ---
  purpose_of_request: any
  background: any
  community_impact_area: any
  project_waste_area: any
  water_quality_area: any
  responsible_party_area: any
  cleanup_abatement: any
  has_any_portion_area: any
  project_fund_area: any
  regional_bord_fund_ans: any
  consists_area: any
  estimated_area: any
  has_any_portion: any

  has_any_portion_value: any;
  regional_bord_fund: any;
  ResId: any;
  preference_1: any;
  preference_2: any;
  preference_3: any;
  preference_4: any;
  preference_5: any;
  preference_6: any;
  preference_7: any;
  preference_8: any;
  goal_1: any;
  goal_2: any;
  goal_3: any;
  goal_4: any;
  goal_5: any;
  goal_6: any;
  goal_7: any;
  section_13442: any;
  section_13443: any;
  categorial_exempt: any;
  negative_declar: any;
  mitigated: any;
  environmental_impact: any;
  havent_start: any;
  in_progress: any;
  complete: any;
  olderthen5: any;
  indecate_status_area: any;
  consists_15301: any;
  consists_15302: any;
  consists_15303: any;
  consists_15304: any;
  otherlist: any;
  does_your_proj: any;
  have_you_attach: any;


  public HasAnyPortion: any
  public ProjectFund: any
  public RegionalBord: any;
  project_attach: any;
  fileName: any;
  getResponseFile: any;
  downloadFile: any;

  constructor(private http: HttpClient) { }

  public  org_party_id = sessionStorage.getItem('OrgPartyID')
  public userName =  sessionStorage.getItem('User')

  public ResponceID = sessionStorage.getItem("RfpResponceID")
  
  // public userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
  //  email : userInfo.preferred_username
  public email:any

  downloadFileCtrl(FileImage) {
    console.log("download file", FileImage)
    this.downloadFile = "http://localhost:9006/nofaapi/nofa/attachements/downloadAttachementFile?file=" + FileImage;

    
  }

  ngOnInit(): void {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    this.email = userInfo.preferred_username
    
    const datavalue = {
      // party_id: this.org_party_id
      party_id: this.org_party_id
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/users/getAllDataByPartyIDIdAndRfpId', datavalue)
      .subscribe(response => {
        this.getResponse = response;
        this.personDetails = this.getResponse.data;
       
        this.project_title = this.personDetails.project_title
        this.project_desc = this.personDetails.project_desc
        this.watershed = this.personDetails.watershed
        this.project_county = this.personDetails.project_county
        this.Responsible_Reg = this.personDetails.Responsible_Reg
        this.fund_request = this.personDetails.fund_request        
        this.local_cost = this.personDetails.local_cost
        this.total_budget = this.personDetails.total_budget
        this.duns_no = this.personDetails.duns_no
        this.fund_request_check = this.personDetails.fund_request_check
        
        this.senet_dist = this.personDetails.senet_dist
        this.assembly_dist = this.personDetails.assembly_dist
        this.us_cong_dist  = this.personDetails.us_cong_dist

        this.legislative_value = this.personDetails.legislative_value
        this.assembly_value = this.personDetails.assembly_value
        this.us_cong_value  = this.personDetails.us_cong_value  

        this.cont_org_name  = this.personDetails.cont_org_name  
        this.cont_first_name  = this.personDetails.cont_first_name  
        this.cont_phone  = this.personDetails.cont_phone  

        this.co_org_name  = this.personDetails.co_org_name  
        this.role_contribution  = this.personDetails.role_contribution  
        this.co_first_name  = this.personDetails.co_first_name  
        this.co_cotect_ph  = this.personDetails.co_cotect_ph  
       ////-------Questionnare--------------------------------
        this.purpose_of_request = this.personDetails.purpose_of_request
        this.background = this.personDetails.background
        this.HasAnyPortion = this.personDetails.has_any_portion
        this.cleanup_abatement = this.personDetails.cleanup_abatement
        this.has_any_portion_area = this.personDetails.has_any_portion_area
        this.community_impact_area = this.personDetails.community_impact_area
        this.project_waste_area = this.personDetails.project_waste_area
        this.water_quality_area = this.personDetails.water_quality_area

        this.ProjectFund = this.personDetails.project_fund
        this.project_fund_area = this.personDetails.project_fund_area
        this.RegionalBord = this.personDetails.regional_bord_fund
        this.regional_bord_fund_ans = this.personDetails.regional_bord_fund_ans
        this.responsible_party_area = this.personDetails.responsible_party_area
        this.preference_1 = this.personDetails.preference_1
        this.preference_2 = this.personDetails.preference_2
        this.preference_3 = this.personDetails.preference_3
        this.goal_1 = this.personDetails.goal_1
        this.goal_2 = this.personDetails.goal_2
        this.goal_3 = this.personDetails.goal_3
        this.goal_4 = this.personDetails.goal_4
        this.goal_5 = this.personDetails.goal_5
        this.goal_6 = this.personDetails.goal_6
        this.goal_7 = this.personDetails.goal_7        
        this.section_13442  = this.personDetails.section_13442
        this.section_13443  = this.personDetails.section_13443
        this.categorial_exempt = this.personDetails.categorial_exempt
        this.negative_declar = this.personDetails.negative_declar
        this.mitigated = this.mitigated
        this.environmental_impact = this.personDetails.environmental_impact
        this.havent_start = this.personDetails.havent_start
        this.in_progress = this.personDetails.in_progress
        this.complete = this.personDetails.complete
        this.olderthen5 = this.personDetails.older_then_5
        this.indecate_status_area = this.personDetails.indecate_status_area
        this.consists_15301 = this.personDetails.consists_15301
        this.consists_15302 = this.personDetails.consists_15302
        this.consists_15303 = this.personDetails.consists_15303
        this.consists_15304 = this.personDetails.consists_15304
        this.otherlist = this.personDetails.other_list    
        this.estimated_area =  this.personDetails.estimated_area
        this.consists_area =  this.personDetails.consists_area
        this.does_your_proj =  this.personDetails.does_your
        /////-------Attachement--------
        this.project_attach =  this.personDetails.project_attach
        


      })

      this.http.get("http://localhost:9006/nofaapi/nofa/attachements/getAttachementFile?rfp_responce_id=" + this.ResponceID)
      .subscribe(response => {
        this.getResponseFile = response;
        this.fileName = this.getResponseFile.data;
        console.log("Show person", this.fileName);

      })
  }

}
