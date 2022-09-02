import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{DataService} from './../../services/data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:DataService,  private router: Router) { }

  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  onSubmit() {
    //console.warn(this.registerForm.value);
    if(this.registerForm.valid){
      this.auth.signup(this.registerForm.value).subscribe(
        result=>{
        if(result.status==200){
          //console.log(result);
          alert(result.message);
          this.router.navigate(['user/login']);
        }else{
          alert(result.message);

          this.router.navigate(['user/login']);
        }
      },
      error=>{ alert(error.error.message);}      
      )
    }
  }

  ngOnInit(): void {
  }

}
