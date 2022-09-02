import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';




@Component({
  selector: 'attachment-tab',
  templateUrl: './attachment-tab.component.html',
  styleUrls: ['./attachment-tab.component.css']
})
export class AttachmentTabComponent implements OnInit {

  @Input()
  public attachmentTab: FormGroup;
  fileName: any;
  getResponse: any;
  attach_title: any;
 
  downloadFile: any
  personDetails: any;

  Attachments = [
              {text: "Optional Attachment - Optional Attachment", id: 1,},
              {text: "Project Budget -", id: 2,},
              {text: "Regional Board Resolution - Proof of Regional Board support (i.e. Resolution or Support Letter from Executive or Assistant Executive ",id: 3,},{text: "Scope of Work - ",id: 4,}
            ]

  constructor(private http: HttpClient) { }
  project_attach: any
  file: File = null;

public ResponceID = sessionStorage.getItem("RfpResponceID")
  // ResponceID:any

  
  
  uploadFile(event) {
    this.file = event.target.files[0];
    console.log("file name", this.file.name)

  }
  onFIleUpload(){
    console.log("file name", this.file.name)
    // const ResponceID = 46
    const formdata = new FormData();
    formdata.append(
      "file",
      this.file,      
    )
    this.http.post("http://localhost:9006/nofaapi/nofa/attachements/createAttachementFile?id=" + this.ResponceID , formdata)
    .subscribe(response => {
      this.getfile();
      })
     
  }

  downloadFileCtrl(FileImage) {
    console.log("download file", FileImage)
    this.downloadFile = "http://localhost:9006/nofaapi/nofa/attachements/downloadAttachementFile?file=" + FileImage;

    // this.http.get("http://localhost:9006/nofaapi/nofa/attachements/downloadAttachementFile?file=" + FileImage)
    //   .subscribe(response => {

    //   })
    // https://nils-mehlhorn.de/posts/angular-file-download-progress

  }
  deleteFileCtrl(event) {
    // console.log("download filw", event)
    // http://localhost:9006/nofaapi/nofa/attachements/deleteAttachementFile?rfp_responce_id=46
    // const ResponceID = 46
    this.http.delete("http://localhost:9006/nofaapi/nofa/attachements/deleteAttachementFile?rfp_responce_id=" + this.ResponceID)
      .subscribe(response => {
        // this.getResponse = response;
        this.getfile();
      })

  }

  // https://www.telerik.com/kendo-angular-ui/components/progressbars/progressbar/
  getfile() {
    const org_party_id = sessionStorage.getItem("OrgPartyID")
    
    // const ResponceID = 46
    this.http.get("http://localhost:9006/nofaapi/nofa/attachements/getAttachementFile?rfp_responce_id=" + this.ResponceID)
      .subscribe(response => {
        this.getResponse = response;
        this.fileName = this.getResponse.data;
        console.log("Show person", this.fileName);

      })
  }

  ngOnInit(): void {

    const org_party_id = sessionStorage.getItem('OrgPartyID')
    const datavalue = {
      party_id: org_party_id
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/users/getAllDataByPartyIDIdAndRfpId', datavalue)
      .subscribe(response => {
        this.getResponse = response;
        this.personDetails = this.getResponse.data;
        this.project_attach = this.personDetails.project_attach
        this.attach_title = this.personDetails.attach_title
      })
      
    this.getfile();
     

  }

}
