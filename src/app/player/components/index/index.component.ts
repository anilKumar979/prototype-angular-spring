import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }
  @Input() public appIndex: FormGroup
  // public current = 1;
  // public steps = [
  //   { label: "Personal Info", icon: "user" },
  //   { label: "Education", icon: "dictionary-add" },
  //   { label: "Attachments", icon: "attachment", optional: true },
  //   { label: "Preview", icon: "preview" },
  //   { label: "Submit", icon: "file-add" },
  // ];

  ngOnInit(): void {
  }

}
