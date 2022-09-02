import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'questionnaire-tab',
  templateUrl: './questionnaire-tab.component.html',
  styleUrls: ['./questionnaire-tab.component.css']
})
export class QuestionnaireTabComponent implements OnInit {

  @Input() public QuestionnaireTab: FormGroup;

  // public formGroup  = new FormGroup({  
  //   has_any_portion: new FormControl(true),
  //   project_fund: new  FormControl(true)
  //   })

  has_any_portion_value: any;
  getResponse: any;
  personDetails: any;
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

  



  constructor(private http: HttpClient) { }

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

  public HasAnyPortion: any
  public ProjectFund: any
  public RegionalBord: any;


  has_any_portionFun(values: any): void {
    console.log("get VALUE", values.currentTarget.checked);
    this.HasAnyPortion = values.currentTarget.checked

    // console.log("portion value", this.formGroup.value.has_any_portion)
    // console.log("portion value",)
    // console.log("formcontrolname value", values.target)

    // if(this.formGroup.value.has_any_portion){
    //      console.log("has_any_portion")
    // }
    // else if(this.formGroup.value.project_fund){
    //   console.log("project_fund")
    // }
    // else{

    // }


    if (this.HasAnyPortion) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "has_any_portion",
        ans1: values.currentTarget.checked
      }
      // console.log("portion",values.currentTarget.checked)
      console.log("portion", datavalue)
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    } else {

      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "has_any_portion",
        ans1: values.currentTarget.checked
      }
      console.log("portion", datavalue)
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
      const datavalue1 = {
        rfp_responce_id: this.ResId,
        questions: "cleanup_abatement"
      }
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/updateQuestionnaire', datavalue1).subscribe(
        result => {
        })
      const datavalue2 = {
        rfp_responce_id: this.ResId,
        questions: "has_any_portion_area"
      }
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/updateQuestionnaire', datavalue2).subscribe(
        result => {
        })

    }
  }

  project_fundFun(values: any): void {
    if (this.ProjectFund) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "project_fund",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    } else {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "project_fund",
        ans1: values.currentTarget.checked
      }
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {
        })

      const datavalue1 = {
        rfp_responce_id: this.ResId,
        questions: "project_fund_area"
      }
      console.log("delete project_fund area", datavalue1)
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/updateQuestionnaire', datavalue1).subscribe(
        result => {
        })
    }

  }


  regional_bord_fundFun(values: any): void {
    if (this.RegionalBord) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "regional_bord_fund",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })

    } else {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "regional_bord_fund",
        ans1: values.currentTarget.checked
      }
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })

      const datavalue1 = {
        rfp_responce_id: this.ResId,
        questions: "regional_bord_fund_ans"
      }

      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/updateQuestionnaire', datavalue1).subscribe(
        result => {
        })


    }

  }

  preference_1Fun(values: any): void {
    if (this.preference_1) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_1",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_1",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })

    }
  }
  preference_2Fun(values: any): void {
    if (this.preference_2) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_2",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_2",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })

    }
  }
  preference_3Fun(values: any): void {
    if (this.preference_3) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_3",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_3",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })

    }
  }
  preference_4Fun(values: any): void {
    if (this.preference_4) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_4",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_4",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }


  }
  preference_5Fun(values: any): void {
    if (this.preference_5) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_5",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_5",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })

    }
  }
  preference_6Fun(values: any): void {
    if (this.preference_6) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_6",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_6",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  preference_7Fun(values: any): void {
    if (this.preference_7) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_7",
        ans1: values.currentTarget.checked
      }    
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_7",
        ans1: values.currentTarget.checked
      }    
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })

    }
  }
  preference_8Fun(values: any): void {
    if (this.preference_8) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_8",
        ans1: values.currentTarget.checked
      }
     
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "preference_8",
        ans1: values.currentTarget.checked
      }
     
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  goal_1Fun(values: any): void {
    if (this.goal_1) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_1",
        ans1: values.currentTarget.checked
      }
    
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_1",
        ans1: values.currentTarget.checked
      }
    
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  goal_2Fun(values: any): void {
    if (this.goal_2) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_2",
        ans1: values.currentTarget.checked
      }
     
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_2",
        ans1: values.currentTarget.checked
      }
     
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  goal_3Fun(values: any): void {
    if (this.goal_3) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_3",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_3",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })

    }
  }
  goal_4Fun(values: any): void {
    if (this.goal_4) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_4",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_4",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
  }
  }
  goal_5Fun(values: any): void {
    if (this.goal_5) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_5",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_5",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  goal_6Fun(values: any): void {
    if (this.goal_6) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_6",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_6",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  goal_7Fun(values: any): void {
    if (this.goal_7) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_7",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "goal_6",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  section_13442Fun(values: any): void {
    if (this.section_13442) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "section_13442",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "section_13442",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
   section_13443Fun(values: any): void {
    if (this.section_13443) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "section_13443",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "section_13443",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  categorial_exemptFun(values: any): void {
    if (this.categorial_exempt) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "categorial_exempt",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "categorial_exempt",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  negative_declarFun(values: any): void {
    if (this.negative_declar) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "negative_declar",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "negative_declar",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  mitigatedFun(values: any): void {
    if (this.mitigated) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "mitigated",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "mitigated",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  environmental_impactFun(values: any): void {
    if (this.environmental_impact) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "environmental_impact",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "environmental_impact",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }  
  havent_startFun(values: any): void {
    if (this.havent_start) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "havent_start",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "havent_start",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  in_progressFun(values: any): void {
    if (this.in_progress) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "in_progress",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "in_progress",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  
  completeFun(values: any): void {
    if (this.complete) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "complete",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "complete",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  older_then_5Fun(values: any): void {
    if (this.olderthen5) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "older_then_5",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "older_then_5",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }

  consists_15301Fun(values: any): void {
    if (this.consists_15301) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "consists_15301",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "consists_15301",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }
  consists_15302Fun(values: any): void {
    if (this.consists_15302) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "consists_15302",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "consists_15302",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }

  consists_15303Fun(values: any): void {
    if (this.consists_15303) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "consists_15303",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "consists_15303",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }

  consists_15304Fun(values: any): void {
    if (this.consists_15304) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "consists_15304",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "consists_15304",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }

  other_listFun(values: any): void {
    if (this.otherlist) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "other_list",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "other_list",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }

  does_your_projFun(values: any): void {
    if (this.does_your_proj) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "does_your_proj",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "does_your_proj",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }

  have_you_attachFun(values: any): void {
    if (this.have_you_attach) {
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "have_you_attach",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
    else{
      const datavalue = {
        rfp_responce_id: this.ResId,
        questions: "have_you_attach",
        ans1: values.currentTarget.checked
      }
       
      this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
        result => {

        })
    }
  }


  ngOnInit(): void {

    // this.HasAnyPortion = true
    const org_party_id = sessionStorage.getItem('OrgPartyID')
    const datavalue = {
      party_id: org_party_id
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/users/getAllDataByPartyIDIdAndRfpId', datavalue)
      .subscribe(response => {
        this.getResponse = response;
        this.personDetails = this.getResponse.data;
        // console.log("Show person", this.personDetails);
        // sessionStorage.removeItem('RfpResponceID');
        // sessionStorage.setItem('RfpResponceID', this.personDetails.RFPResponceId);



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
      


      })
    this.ResId = sessionStorage.getItem('RfpResponceID')
  }


}
