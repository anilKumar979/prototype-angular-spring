import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { _getOptionScrollPosition } from '@angular/material/core';
import { MeasureTableTabComponent } from '../../MeasureTbl/measure-table-tab/measure-table-tab.component';


@Component({
  selector: 'performance-measure-tab',
  templateUrl: './performance-measure-tab.component.html',
  styleUrls: ['./performance-measure-tab.component.css']
})
export class PerformanceMeasureTabComponent implements OnInit {
  Purpose: any;
  PurposeList: any;
  waterbody: any;
  waterbodyList: any;
  bmpFilterName:any
  // Attribute_Name: any

  // Percentage: any

  // valuePor: any = [{ ID: 1, NAME: "Assessment" }]

  public SubAttribute = [{ AttName: "Not Applicable", ID: 1, }];

  public ResponceID = sessionStorage.getItem("RfpResponceID")

  landuse: any;
  landuseList: any;

  public datavalue: any
  sitecondition: any;
  siteconditionList: any;
  Implement: any;
  ImplementList: any;
  tmdPhase: any;
  tmdPhaseList: any;
  bmpGrp: any;
  bmpGrpList: any;

  public bmpSubId: any
  bmpSub: any;
  bmpSubList: any;
  peopleForm: any;
  sampling: any;
  samplingList: any;

  constructor(private http: HttpClient, public fb: FormBuilder) { }
  @Input()
  public performanceMeasure: FormGroup;

  purposeMeasure = this.fb.group({
    // name: ['', [Validators.required, AgeValidator]],
    Attribute_Name: [''],
    SubAttribute_Name: [''],
    Percentage: ['']

  });
  waterbodyMeasure = this.fb.group({
    Waterbody_Attribute_Name: [''],
    Waterbody_SubAttribute_Name: [''],
    Waterbody_Percentage: ['']
  });
  landuseMeasure = this.fb.group({
    Landuse_Attribute_Name: [''],
    Landuse_SubAttribute_Name: [''],
    Landuse_Percentage: ['']

  });
  siteMeasure = this.fb.group({
    Site_Attribute_Name: [''],
    Site_SubAttribute_Name: [''],
    Site_Percentage: ['']
  });

  ImplementMeasure = this.fb.group({
    Implement_Attribute_Name: [''],
    Implement_SubAttribute_Name: [''],
    Implement_Percentage: ['']
  });

  TmdlMeasure = this.fb.group({
    Tmdl_Phase: [''],
    Stresor: [''],
    Tmdl_Percentage: ['']
  });

  BmpMeasure = this.fb.group({
    BMP_Group: [''],
    BMP_SubGroup: [''],
    BMP_Percentage: ['']

  });

  SamplingMeasure = this.fb.group({
    Sampling_Attribute_Name: [''],
    Sampling_SubAttribute_Name: [''],
    Sampling_Percentage: ['']

  });

CommentsMeasure = this.fb.group({
    Comments: [''],   

  });
  



  onPurposeSubmit(key: string) {
    console.log("follow me", key)
    if (key === 'purpose') {
      console.log("show form value", this.purposeMeasure.value.Attribute_Name);
      console.log("show SubAttribute_Name", this.purposeMeasure.value.SubAttribute_Name); // { first: '', last: '' }
      console.log("show Percentage", this.purposeMeasure.value.Percentage);

      console.log("ResponceID", this.ResponceID)
      this.datavalue = {
        Name: "Purpose",
        Att_Name: this.purposeMeasure.value.Attribute_Name,
        Sub_Att_Name: this.purposeMeasure.value.SubAttribute_Name,
        value: this.purposeMeasure.value.Percentage,
        rfp_responce_id: 46
      }
    }

    if (key === 'waterbody') {
      this.datavalue = {
        Name: "Waterbody",
        Att_Name: this.waterbodyMeasure.value.Waterbody_Attribute_Name,
        Sub_Att_Name: this.waterbodyMeasure.value.Waterbody_SubAttribute_Name,
        value: this.waterbodyMeasure.value.Waterbody_Percentage,
        rfp_responce_id: 46
      }
    }
    if (key === 'landuse') {

      this.datavalue = {
        Name: "Land Use",
        Att_Name: this.landuseMeasure.value.Landuse_Attribute_Name,
        Sub_Att_Name: this.landuseMeasure.value.Landuse_SubAttribute_Name,
        value: this.landuseMeasure.value.Landuse_Percentage,
        rfp_responce_id: 46
      }
    }
    if (key === 'landuse') {

      this.datavalue = {
        Name: "Land Use",
        Att_Name: this.landuseMeasure.value.Landuse_Attribute_Name,
        Sub_Att_Name: this.landuseMeasure.value.Landuse_SubAttribute_Name,
        value: this.landuseMeasure.value.Landuse_Percentage,
        rfp_responce_id: 46
      }
    }

    if (key === 'sitecon') {

      this.datavalue = {
        Name: "Site Condition",
        Att_Name: this.siteMeasure.value.Site_Attribute_Name,
        Sub_Att_Name: this.siteMeasure.value.Site_SubAttribute_Name,
        value: this.siteMeasure.value.Site_Percentage,
        rfp_responce_id: 46
      }
    }

    if (key === 'Implement') {
      this.datavalue = {
        Name: "Implementation",
        Att_Name: this.ImplementMeasure.value.Implement_Attribute_Name,
        Sub_Att_Name: this.ImplementMeasure.value.Implement_SubAttribute_Name,
        value: this.ImplementMeasure.value.Implement_Percentage,
        rfp_responce_id: 46
      }
    }

    if (key === 'tmdl') {

      this.datavalue = {
        Name: "TMDL",
        Att_Name: this.TmdlMeasure.value.Tmdl_Phase,
        Sub_Att_Name: this.TmdlMeasure.value.Stresor,
        value: this.TmdlMeasure.value.Tmdl_Percentage,
        rfp_responce_id: 46
      }
    }

    if (key === 'bmps') {

      this.datavalue = {
        Name: "BMPs",
        Att_Name: this.bmpFilterName,
        Sub_Att_Name: this.BmpMeasure.value.BMP_SubGroup,
        value: this.BmpMeasure.value.BMP_Percentage,
        rfp_responce_id: 46
      }
    }

    if (key === 'sampling') {

      this.datavalue = {
        Name: "Sampling",
        Att_Name: this.SamplingMeasure.value.Sampling_Attribute_Name,
        Sub_Att_Name: this.SamplingMeasure.value.Sampling_SubAttribute_Name,
        value: this.SamplingMeasure.value.Sampling_Percentage,
        rfp_responce_id: 46
      }
    }

    if (key === 'comments') {

      this.datavalue = {
        Name: "Comments",
        Att_Name: this.CommentsMeasure.value.Comments,
        Sub_Att_Name:"",
        value: "",
        rfp_responce_id: 46
      }
    }

    this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/createPeroformanceMeasure', this.datavalue)
      .subscribe(res => {
      })

  }
  // getcompanyid(company: any, event: Event) {
  //   console.log('Selected Company: ', company, event);
  // }

  
  BmpsSubValue(event) {
    console.log("the event", event.target.value)
    console.log("filter llist", this.bmpGrpList[0].ID)
    // let filteredArr = res.filter(data => data.id < 100);
    
    // const filterdata = this.bmpGrpList.find(m => m.ID === event.target.value);
    // console.log("value is", filterdata)

    this.bmpSubId = event.target.value

    for(let i = 0 ; i< this.bmpGrpList.length ; i++){
      if(this.bmpGrpList[i].ID == this.bmpSubId){
       console.log("its match", this.bmpGrpList[i].NAME);
       
       this.bmpFilterName = this.bmpGrpList[i].NAME

      }
   }
    const datavalue7 = {
      NAME_ID: this.bmpSubId
    }
    // console.log("change sub item", this.bmpSubId)
    this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/getPreSubAttByName', datavalue7)
      .subscribe(res => {
        this.bmpSub = res;
        this.bmpSubList = this.bmpSub.data;
        // console.log("Show BMp", this.bmpGrpList.ID);
      });

  }

  ngOnInit(): void {

    const datavalue = {
      MEASURED_ID: "1"
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/getPreAttByMeasureId', datavalue)
      .subscribe(response => {
        this.Purpose = response;
        this.PurposeList = this.Purpose.data;
        // console.log("Show PurposeList", this.PurposeList);
      });

    const datavalue1 = {
      MEASURED_ID: "2"
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/getPreAttByMeasureId', datavalue1)
      .subscribe(res => {
        this.waterbody = res;
        this.waterbodyList = this.waterbody.data;
        // console.log("Show assembly", this.waterbodyList);
      });


    const datavalue2 = {
      MEASURED_ID: "3"
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/getPreAttByMeasureId', datavalue2)
      .subscribe(res => {
        this.landuse = res;
        this.landuseList = this.landuse.data;
        // console.log("Show assembly", this.landuseList);
      });

    const datavalue3 = {
      MEASURED_ID: "4"
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/getPreAttByMeasureId', datavalue3)
      .subscribe(res => {
        this.sitecondition = res;
        this.siteconditionList = this.sitecondition.data;

      });


    const datavalue4 = {
      MEASURED_ID: "5"
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/getPreAttByMeasureId', datavalue4)
      .subscribe(res => {
        this.Implement = res;
        this.ImplementList = this.Implement.data;
      });

    const datavalue5 = {
      MEASURED_ID: "6"
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/getPreAttByMeasureId', datavalue5)
      .subscribe(res => {
        this.tmdPhase = res;
        this.tmdPhaseList = this.tmdPhase.data;
      });

    const datavalue6 = {
      MEASURED_ID: "7"
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/getPreAttByMeasureId', datavalue6)
      .subscribe(res => {
        this.bmpGrp = res;
        this.bmpGrpList = this.bmpGrp.data;
        // console.log("Show BMp", this.bmpGrpList.ID);
      });

      const datavalue8 = {
        MEASURED_ID: "8"
      }
      this.http.post('http://localhost:9006/nofaapi/nofa/PerformanceMeasure/getPreAttByMeasureId', datavalue8)
        .subscribe(res => {
          this.sampling = res;
          this.samplingList = this.sampling.data;
          // console.log("Show BMp", this.bmpGrpList.ID);
        });


  }




}
