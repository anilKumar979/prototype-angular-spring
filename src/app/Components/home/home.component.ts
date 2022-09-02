import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MsalBroadcastService, MsalService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { InteractionStatus, EventType, RedirectRequest, EventMessage } from '@azure/msal-browser';
import { DataService } from './../../Services/data.service'
import { ParseTreeResult } from '@angular/compiler';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

const LOGIN_ENDPOINT = 'http://localhost:9006/csaic/api/user/login';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string,
  sub?: string
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  loginDisplay = false;
  profile!: ProfileType;
  getResponse: any;
  orgList: any;
  formData: any;

  title = 'HQ SOFTWARE CONSULTING';
  isIframe = false;

  private readonly _destroying$ = new Subject<void>();
  constructor(private http: HttpClient, @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration, private auth: DataService, private msalBroadcastService: MsalBroadcastService,
    private broadcastService: MsalBroadcastService, private route:ActivatedRoute, private router:Router ,private authService: MsalService, private ds: DataService) { }



  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        console.log(result);

      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      })

    // -------------Show Org List ---------------
    // const datavalue = {
    //   nofa_id: 43
    // }
    // this.http.post('http://localhost:9006/nofaapi/nofa/organization/getOrganizationByNofaId', datavalue)
    //   .subscribe(response => {
    //     this.getResponse = response;
    //     this.orgList = this.getResponse.data;
    //     console.log("org list", this.orgList)
    //   })

  }

  getOrgId(id: any) {
    console.log("getID", id)
    sessionStorage.setItem('OrgPartyID', id)
  }

  appliedNOFAForm(id: any) {
    const datavalue = {
      "name": "Anil Kumaar",
      "title": '',
      "description": '',
      "watershed": '',
      "county": '',
      "responsible_water_board": '',
      "latitude": "34.08515",
      "longitude": "-118.05502",
      "nofa_id": id,
      "party_id": '',
      "rfp_response_ID": ''
    }
    this.http.post('http://localhost:9006/nofaapi/nofa/organization/createApplicantOrg', datavalue)
      .subscribe(res => {
        this.getResponse = res;
        // this.formData = this.getResponse;
        console.log("reespong", this.getResponse)
        sessionStorage.setItem('RfpResponceID', this.getResponse.RfpResponceID);
        sessionStorage.setItem('RfpID', this.getResponse.RfpID);
        sessionStorage.setItem('parties_ID', this.getResponse.parties_ID);

        const datavalue1 = {
          first_name: "",
          last_name: "",
          phone: "",
          fax: "",
          email: "",
          rfp_responce_id: this.getResponse.RfpResponceID,
          management_role_type: "PROJECT DIRECTOR",
        }
        this.http.post('http://localhost:9006/nofaapi/nofa/projectManagement/createProjectManagement', datavalue1)
          .subscribe(res => {
            console.log("all 2nd")

          })
        const datavalue2 = {
          first_name: "",
          last_name: "",
          phone: "",
          fax: "",
          email: "",
          rfp_responce_id: this.getResponse.RfpResponceID,
          management_role_type: "PROJECT MANAGER",
        }
        this.http.post('http://localhost:9006/nofaapi/nofa/projectManagement/createProjectManagement', datavalue2)
          .subscribe(res => {
            console.log("all 3nd")

          })
        const datavalue3 = {
          rfp_responce_id: this.getResponse.RfpResponceID,
        }
        this.http.post('http://localhost:9006/nofaapi/nofa/questionnaire/createQuestionnaireAllRecord', datavalue3)
          .subscribe(res => {
            console.log("all 4nd")

          })

      })

  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
if(this.loginDisplay ){
  this.router.navigateByUrl('/post');
}
    //this.userLogin();
  }


  public email: string;
  sub: string;
  name: any;
  UserInfo: any
  login() {
    this.authService.loginPopup()
      .subscribe({
        next: (result) => {
          console.log(result.idTokenClaims["preferred_username"]);
          console.log(result.idTokenClaims["sub"]);
          // console.log("all user", result.idTokenClaims);
          //alert("User:"+result.idTokenClaims["preferred_username"]+ " , SUB: "+result.idTokenClaims["sub"]);
          this.email = result.idTokenClaims["preferred_username"];
          this.sub = result.idTokenClaims["sub"];
          this.name = result.idTokenClaims["name"];
          this.userLogin(this.email, this.sub);
          this.setLoginDisplay();

          this.UserInfo = {
            Email: this.email,
            Sub: this.sub,
            Name: this.name
          }

          sessionStorage.setItem('User', this.name)
          sessionStorage.setItem('userInfo', JSON.stringify(result.idTokenClaims))
        },
        error: (error) => console.log(error)
      });
  }


  logout() { // Add log out function here
    this.ds.setToken("");
    this.authService.logoutPopup({
      mainWindowRedirectUri: "/"

    });
    sessionStorage.removeItem('User')
    sessionStorage.removeItem('userInfo')
  }
  userId: any;
  token: any;
  userLogin(email, sub) {
    //console.log(this.loginDisplay);   
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = {
      email: this.email,
      sub: this.sub,
      first_name: this.name,
      last_name: this.name,
      middle_initial: ""
    };
    // this.http.post<any>('http://localhost:9006/csaic/api/user/login', body, { headers }).subscribe(data => {
    this.http.post<any>(' http://192.168.1.177:8080/angularAPI/api/auth/signin', body, { headers }).subscribe(data => {
      this.token = data.token;
      console.log("data");
      console.log(data);
      this.ds.setToken(data.token);

    });
  }
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}