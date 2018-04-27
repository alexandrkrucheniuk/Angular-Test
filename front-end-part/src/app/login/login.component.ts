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
        localStorage.setItem('email',userData.email);
        this.loggedIn = (localStorage.getItem('email') != null);
        location.reload();
        // Now sign-in with userData

      }
    );
  }

  ngOnInit(): void {
    this.loggedIn = (localStorage.getItem('email') != null);
  }

}
