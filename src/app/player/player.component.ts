import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepperComponent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  AllValues: any;

  constructor(private httpClient: HttpClient) { }

  public currentStep = 0;

  @ViewChild("stepper", { static: false })
  public stepper: StepperComponent


  private isStepValid = (index: number): boolean => {
    return this.getGroupAt(index).valid || this.currentGroup.untouched;
  };

  private shouldValidate = (index: number): boolean => {
    return this.getGroupAt(index).touched && this.currentStep >= index;
  };

  public steps = [
    {
      label: 'Genral Information',
      // isValid: this.isStepValid,
      // validate: this.shouldValidate
    },
    {
      label: 'Project Budget',
      // isValid: this.isStepValid,
      // validate: this.shouldValidate
    },
    {
      label: 'Funding',
      // isValid: this.isStepValid,
      // validate: this.shouldValidate
    },
    {
      label: 'Project Manage',
      // isValid: this.isStepValid,
      // validate: this.shouldValidate
    },
    {
      label: 'Legislative Information',
      // isValid: this.isStepValid,
      // validate: this.shouldValidate
    },
    {
      label: 'Contact',
      // isValid: this.isStepValid,
      // validate: this.shouldValidate
    },

    {
      label: 'Cooprating Entites',
      // isValid: this.isStepValid,
      // validate: this.shouldValidate
    },
    {
      label: 'Questionnaire',
      // isValid: this.isStepValid,
      // validate: this.shouldValidate
    },
    {
      label: 'Attachments',
      // isValid: this.isStepValid,
      // validate: this.shouldValidate
    },
    {
      label: "Performance Measurement",
      isValid: undefined,
    },
    {
      label: "Preview",
      isValid: undefined,
    }
  ];

  @Input() appCreate: FormGroup
  @Input() appFooter: FormGroup
  @Input() appIndex: FormGroup


  ngOnInit(): void {
  }


  public form = new FormGroup({
    
    genralInformation: new FormGroup({
      // fullName: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      watershed: new FormControl('', [Validators.required]),
      responsible_water_board: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    }),
    // previewPage: new FormGroup({
    //   project_attach: new FormControl(''),    
     
    // }),
   
    projectBudget: new FormGroup({

      fund_request: new FormControl('', Validators.required),
      local_cost: new FormControl('', [Validators.required]),
      total_budget: new FormControl('', Validators.required),
      duns_no: new FormControl('', Validators.required)
      // gender: new FormControl(null, [Validators.required]),
      // about: new FormControl('')
    }),
    fundinDetails: new FormGroup({

    }),
    projectmanage: new FormGroup({
      pd_first_name: new FormControl(''),
      pd_last_name: new FormControl('', [Validators.required]),
      pd_phone: new FormControl('', [Validators.required]),
      pd_email: new FormControl('', [Validators.required]),
      pd_cemail: new FormControl('', [Validators.required]),
      pd_fax: new FormControl('', [Validators.required]),
      pm_first_name: new FormControl('', [Validators.required]),
      pm_last_name: new FormControl('', [Validators.required]),
      pm_phone: new FormControl('', [Validators.required]),
      pm_email: new FormControl('', [Validators.required]),
      pm_cemail: new FormControl('', [Validators.required]),
      pm_fax: new FormControl('', [Validators.required]),

    }),

    legisInformation: new FormGroup({
      senet_dist: new FormControl(''),
      assembly_dist: new FormControl(''),
      us_cong_dist: new FormControl(''),

      legislative_value: new FormControl(''),
      assembly_value: new FormControl(''),
      us_cong_value: new FormControl(''),

    }),

    contactPage: new FormGroup({
      cont_org_name: new FormControl(''),
      cont_first_name: new FormControl(''),
      cont_last_name: new FormControl(''),
      cont_phone: new FormControl(''),
      cont_email: new FormControl(''),

    }),
    coopratingEntites: new FormGroup({
      co_org_name: new FormControl(''),
      role_contribution: new FormControl(''),
      co_first_name: new FormControl(''),
      co_last_name: new FormControl(''),
      co_cotect_ph: new FormControl(''),
      co_email: new FormControl(''),

    }),

    QuestionnaireTab: new FormGroup({
      purpose_of_request: new FormControl(''),
      background: new FormControl(''),
      community_impact_area: new FormControl(''),
      project_waste_area: new FormControl(''),
      water_quality_area: new FormControl(''),
      responsible_party_area: new FormControl(''),
      cleanup_abatement: new FormControl(''),
      has_any_portion_area: new FormControl(''),
      project_fund_area: new FormControl(''),
      regional_bord_fund: new FormControl(''),
      regional_bord_fund_ans: new FormControl(''),
      consists_area: new FormControl(''),
      estimated_area: new FormControl(''),
      has_any_portion: new FormControl(''),
      project_fund: new FormControl(''),
      preference_1: new FormControl(''),
      preference_2: new FormControl(''),
      preference_3: new FormControl(''),
      preference_4: new FormControl(''),
      preference_5: new FormControl(''),
      preference_6: new FormControl(''),
      preference_7: new FormControl(''),
      preference_8: new FormControl(''),
      goal_1: new FormControl(''),
      goal_2: new FormControl(''),
      goal_3: new FormControl(''),
      goal_4: new FormControl(''),
      goal_5: new FormControl(''),
      goal_6: new FormControl(''),
      goal_7: new FormControl(''),
      section_13442: new FormControl(''),
      section_13443: new FormControl(''),
      categorial_exempt: new FormControl(''),
      negative_declar: new FormControl(''),
      mitigated: new FormControl(''),
      environmental_impact: new FormControl(''),     
      havent_start: new FormControl(''),
      in_progress: new FormControl(''),
      complete: new FormControl(''),
      older_then_5: new FormControl(''),  
      indecate_status_area: new FormControl(''),
      consists_15301: new FormControl(''),
      consists_15302: new FormControl(''),
      consists_15303: new FormControl(''),
      consists_15304: new FormControl(''),
      other_list : new FormControl(''),
      does_your: new FormControl(''),
      have_you_attach: new FormControl('')     
    }),
   
    attachmentTab: new FormGroup({
      project_attach: new FormControl(''),
      attach_title: new FormControl('')
     
    }),

    performanceMeasure: new FormGroup({
      project_attach: new FormControl(''),
      attach_title: new FormControl('')
     
    }),
    previewPage: new FormGroup({
      project_attach: new FormControl(''),
     
     
    }),
    // genralInformation: new FormGroup({
    //   // fullName: new FormControl('', [Validators.required]),
    //   title: new FormControl('', [Validators.required]),
    //   description: new FormControl('', [Validators.required]),
    //   watershed: new FormControl('', [Validators.required]),
    //   responsible_water_board: new FormControl('', [Validators.required]),
    //   country: new FormControl('', [Validators.required]),
    // }),
  });

  public get currentGroup(): FormGroup {
    return this.getGroupAt(this.currentStep);
  }

  public next(): void {
    const ResponceId = sessionStorage.getItem('RfpResponceID')
    const org_party_id = sessionStorage.getItem('OrgPartyID')

    if (this.currentStep == 0) {     
      console.log("form value345", this.form.value.genralInformation)     
            
      const datavalue = {
        name: 'Anil Kumaar',
        title: this.form.value.genralInformation.title,
        description: this.form.value.genralInformation.description,
        watershed: this.form.value.genralInformation.watershed,
        county: this.form.value.genralInformation.country,
        responsible_water_board: "Diss All",
        latitude: "34.08515",
        longitude: "-118.05502",
        nofa_id: "43",
        party_id: org_party_id,
        rfp_response_ID: ResponceId
      }

      if (!this.form.valid) {
        console.log("2nd entry ", datavalue)

        this.httpClient.post('http://localhost:9006/nofaapi/nofa/organization/createApplicantOrg', datavalue).subscribe(
          result => {
          }
        )
      }
    }
    else if (this.currentStep == 1) {
      console.log("form value", this.form.value.projectBudget)

      const datavalue = {
        fund_request: this.form.value.projectBudget.fund_request,
        local_cost: this.form.value.projectBudget.local_cost,
        total_budget: this.form.value.projectBudget.total_budget,
        duns_no: this.form.value.projectBudget.duns_no,
        rfp_id: 12,
        rfp_responce_id: ResponceId
      }
      if (!this.form.valid) {

        this.httpClient.post('http://localhost:9006/nofaapi/nofa/projectBudget/createProgectBudget', datavalue).subscribe(
            result => {

            }
        )
      }

    } else if (this.currentStep == 2) {
      console.log("paymentDetails value", this.form.value.fundinDetails)

    } else if (this.currentStep == 3) {

      this.AllValues = this.form.value.projectmanage

      console.log("projectmanage information", this.AllValues.pd_first_name)

      if (this.AllValues.pd_first_name || this.AllValues.pd_last_name ||
        this.AllValues.pd_phone || this.AllValues.pd_fax || this.AllValues.pd_email) {

        const datavalue = {
          first_name: (!this.AllValues.pd_first_name) ? "" : this.AllValues.pd_first_name,
          last_name: (!this.AllValues.pd_last_name) ? "" : this.AllValues.pd_last_name,
          phone: (!this.AllValues.pd_phone) ? "" : this.AllValues.pd_phone,
          fax: (!this.AllValues.pd_fax) ? "" : this.AllValues.pd_fax,
          email: (!this.AllValues.pd_email) ? "" : this.AllValues.pd_email,
          rfp_responce_id: ResponceId,
          management_role_type: "PROJECT DIRECTOR",
        }
        
          console.log("2nd entry ", datavalue)

          this.httpClient.post('http://localhost:9006/nofaapi/nofa/projectManagement/UpdatContactMechanisms', datavalue).subscribe(
              result => {

              }
          )
        
      }
      if (this.AllValues.pm_first_name || this.AllValues.pm_last_name || this.AllValues.pm_phone || this.AllValues.pm_fax || this.AllValues.pm_email) {
        const datavalue = {
          first_name: (!this.AllValues.pm_first_name) ? "" : this.AllValues.pm_first_name,
          last_name: (!this.AllValues.pm_last_name) ? "" : this.AllValues.pm_last_name,
          phone: (!this.AllValues.pm_phone) ? "" : this.AllValues.pm_phone,
          fax: (!this.AllValues.pm_fax) ? "" : this.AllValues.pm_fax,
          email: (!this.AllValues.pm_email) ? "" : this.AllValues.pm_email,
          rfp_responce_id: ResponceId,
          management_role_type: "PROJECT MANAGER",
        }
       
          console.log("2nd entry ", datavalue)

          this.httpClient.post('http://localhost:9006/nofaapi/nofa/projectManagement/UpdatContactMechanisms', datavalue).subscribe(
              result => {

              }
          )
       

      } else {
        const datavalue = {
          first_name: (!this.AllValues.pm_first_name) ? "" : this.AllValues.pm_first_name,
          last_name: (!this.AllValues.pm_last_name) ? "" : this.AllValues.pm_last_name,
          phone: (!this.AllValues.pm_phone) ? "" : this.AllValues.pm_phone,
          fax: (!this.AllValues.pm_fax) ? "" : this.AllValues.pm_fax,
          email: (!this.AllValues.pm_email) ? "" : this.AllValues.pm_email,
          rfp_responce_id: ResponceId,
          management_role_type: "PROJECT MANAGER",
        }
        // if (!this.form.valid) {
          console.log("2nd entry ", datavalue)

          this.httpClient.post('http://localhost:9006/nofaapi/nofa/projectManagement/UpdatContactMechanisms', datavalue).subscribe(
              result => {

              }
          )
        // }

      }

    } else if (this.currentStep == 4) {
      console.log("legislative info", this.form.value.legisInformation)
      if (this.form.value.legisInformation.legislative_value) {
        const datavalue = {
          legislative_value: this.form.value.legisInformation.legislative_value,
          rfp_leg_type_id: 2,
          rfp_responce_id: ResponceId,
          leg_type_id: 3,
        }

        this.httpClient.post('http://localhost:9006/nofaapi/nofa/Legislatives/createAdditionalLegInfo', datavalue)
          .subscribe(response => {

          })
      }
      if (this.form.value.legisInformation.assembly_value) {

        const datavalue = {
          legislative_value: this.form.value.legisInformation.assembly_value,
          rfp_leg_type_id: 2,
          rfp_responce_id: ResponceId,
          leg_type_id: 4,
        }

        this.httpClient.post('http://localhost:9006/nofaapi/nofa/Legislatives/createAdditionalLegInfo', datavalue)
          .subscribe(response => {

          })

      }
      if (this.form.value.legisInformation.us_cong_value) {

        const datavalue = {
          legislative_value: this.form.value.legisInformation.us_cong_value,
          rfp_leg_type_id: 2,
          rfp_responce_id: ResponceId,
          leg_type_id: 2,
        }

        this.httpClient.post('http://localhost:9006/nofaapi/nofa/Legislatives/createAdditionalLegInfo', datavalue)
          .subscribe(response => {

          })

      }

    } else if (this.currentStep == 5) {

      console.log("Contact info", this.form.value.contactPage)
      const datavalue = {
        org_name: this.form.value.contactPage.cont_org_name,
        first_name: this.form.value.contactPage.cont_first_name,
        last_name: this.form.value.contactPage.cont_last_name,
        email: this.form.value.contactPage.cont_email,
        phone: this.form.value.contactPage.cont_phone,
        management_role_type: "PROJECT_CONTACT",
        rfp_id: 12,
        rfp_responce_id: ResponceId,
        Person_party_id: 251
      }


      this.httpClient.post('http://localhost:9006/nofaapi/nofa/contact/createContact', datavalue)
        .subscribe(response => {

        })
    } else if (this.currentStep == 6) {

      console.log("Contact info", this.form.value.coopratingEntites)
      const datavalue = {
        org_name: this.form.value.coopratingEntites.co_org_name,
        first_name: this.form.value.coopratingEntites.co_first_name,
        last_name: this.form.value.coopratingEntites.co_last_name,
        email: this.form.value.coopratingEntites.co_email,
        phone: this.form.value.coopratingEntites.co_cotect_ph,
        management_role_type: "PROJECT_COOPERATING",
        rfp_id: 12,
        rfp_responce_id: ResponceId,
        Person_party_id: org_party_id
      }
      this.httpClient.post('http://localhost:9006/nofaapi/nofa/cooperating/createCooperating', datavalue)
        .subscribe(response => {

        })
    } else if (this.currentStep == 7) {

      console.log("form value345", this.form.value.QuestionnaireTab)

      if (!this.form.valid) {

        
        // console.log("gola responceid", ResponceId)

        if (this.form.value.QuestionnaireTab.purpose_of_request) {
          const datavalue = {
            rfp_responce_id: ResponceId,
            questions: 'purpose_of_request',
            ans1: this.form.value.QuestionnaireTab.purpose_of_request
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
            result => {
            })

        }
        if (this.form.value.QuestionnaireTab.background) {
          const datavalue = {
            rfp_responce_id: ResponceId,
            questions: 'background',
            ans1: this.form.value.QuestionnaireTab.background
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
            result => {
            })

        }

        if (this.form.value.QuestionnaireTab.has_any_portion) {
          const datavalue = {
            rfp_responce_id: ResponceId,
            questions: 'cleanup_abatement',
            ans1: this.form.value.QuestionnaireTab.cleanup_abatement
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
            result => {
            })
          const datavalue1 = {
            rfp_responce_id: ResponceId,
            questions: 'has_any_portion_area',
            ans1: this.form.value.QuestionnaireTab.has_any_portion_area
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue1).subscribe(
            result => {
            })

        }

        if (this.form.value.QuestionnaireTab.community_impact_area) {
          const datavalue = {
            rfp_responce_id: ResponceId,
            questions: 'community_impact_area',
            ans1: this.form.value.QuestionnaireTab.community_impact_area
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
            result => {
            })

        }
        if (this.form.value.QuestionnaireTab.project_waste_area) {
          const datavalue = {
            rfp_responce_id: ResponceId,
            questions: 'project_waste_area',
            ans1: this.form.value.QuestionnaireTab.project_waste_area
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
            result => {
            })

        }
        if (this.form.value.QuestionnaireTab.water_quality_area) {
          const datavalue = {
            rfp_responce_id: ResponceId,
            questions: 'water_quality_area',
            ans1: this.form.value.QuestionnaireTab.water_quality_area
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
            result => {
            })

        }

        if (this.form.value.QuestionnaireTab.project_fund) {
          const datavalue = {
            rfp_responce_id: ResponceId,
            questions: 'project_fund_area',
            ans1: this.form.value.QuestionnaireTab.project_fund_area
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
            result => {
            })

        }
        if (this.form.value.QuestionnaireTab.responsible_party_area) {
          const datavalue = {
            rfp_responce_id: ResponceId,
            questions: 'responsible_party_area',
            ans1: this.form.value.QuestionnaireTab.responsible_party_area
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
            result => {
            })

        }
        if (this.form.value.QuestionnaireTab.indecate_status_area) {
          const datavalue = {
            rfp_responce_id: ResponceId,
            questions: 'indecate_status_area',
            ans1: this.form.value.QuestionnaireTab.indecate_status_area
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
            result => {
            })

        }
        if (this.form.value.QuestionnaireTab.consists_area) {
          const datavalue = {
            rfp_responce_id: ResponceId,
            questions: 'consists_area',
            ans1: this.form.value.QuestionnaireTab.consists_area
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
            result => {
            })

        }
        
        if (this.form.value.QuestionnaireTab.estimated_area) {
          const datavalue = {
            rfp_responce_id: ResponceId,
            questions: 'estimated_area',
            ans1: this.form.value.QuestionnaireTab.estimated_area
          }
          this.httpClient.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaire', datavalue).subscribe(
            result => {
            })
        }
      
        else {

        }

      }



    } else if (this.currentStep == 8)  {
     
      console.log("form attachmentTab", this.form.value.attachmentTab)
      const datavalue = {
        attach_title : this.form.value.attachmentTab.attach_title === undefined ? null : this.form.value.attachmentTab.attach_title,
        attach_category:this.form.value.attachmentTab.project_attach === undefined ? null : this.form.value.attachmentTab.project_attach,
        rfp_responce_id:ResponceId
      }
      //  if (!this.form.valid) {
        console.log("2nd entry ", datavalue)

        this.httpClient.post('http://localhost:9006/nofaapi/nofa/attachements/createAttachements', datavalue).subscribe(
          result => {
          }
        )
      // }
       
    }
    else {

    }

    if (this.currentGroup.valid && this.currentStep !== this.steps.length) {
      this.currentStep += 1;
      return;
    }

    this.currentGroup.markAllAsTouched();
    this.stepper.validateSteps();

  }

  public prev(): void {
    this.currentStep -= 1;
  }

  public submit(): void {
    if (!this.currentGroup.valid) {
      this.currentGroup.markAllAsTouched();
      this.stepper.validateSteps();
    }
    if (this.form.valid) {
      console.log("Submitted data", this.form.value);
    }
  }

  private getGroupAt(index: number): FormGroup {
    const groups = Object.keys(this.form.controls).map((groupName) =>
      this.form.get(groupName)
    ) as FormGroup[];

    return groups[index];
  }
}