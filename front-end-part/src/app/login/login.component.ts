import {Component,OnInit} from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:object = {
    name : null,
    email: null
  };
  loggedIn:boolean = false;

  constructor( private socialAuthService: AuthService ) {}

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.user = userData;
        console.log(this.user);
        localStorage.setItem('email',userData.email);
        this.loggedIn = (localStorage.getItem('email') != null);
        location.reload();
        // Now sign-in with userData

      }
    );
  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    this.loggedIn = (localStorage.getItem('email') != null);
  }

}
