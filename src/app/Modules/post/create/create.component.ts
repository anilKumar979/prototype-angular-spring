import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public postService: PostService, private router: Router) { }
  public ShowHide:boolean;
  form!: FormGroup;

  ngOnInit(): void {
    this.ShowHide=true;
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.ShowHide=false;
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.ShowHide=true;
         this.postService.message=res.data;         
         this.router.navigateByUrl('post/index');
    })
  }



}
