import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{DataService} from './../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:DataService, private router: Router) { }

  ngOnInit(): void {
    if(this.isLoggedIn()){
      //console.log(this.getToken());
      this.router.navigate(['home']);
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.loginForm.value);
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(result=>{
        if(result.status==200){
          console.log(result);
          this.setToken(result.token);
          //alert(result.token);
          this.router.navigate(['home']);
        }else{
          //this.setToken(result.token);
          alert(result.message);
        }
      })

    }
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['user/login']);
  }

}
