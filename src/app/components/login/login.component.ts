import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailControl: FormControl = new FormControl('');
  passwordControl: FormControl = new FormControl('');

  //this is set to signIn assuming that the corresponding radio button is set to be checked by default
  loginType: string = 'signIn';

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.emailControl.value && this.passwordControl.value) {
      this.loginService.login(this.emailControl.value, this.passwordControl.value).subscribe(user => this.loginService.loggedUser = user);
    } else {

    }
  }

  onLoginTypeChange(loginType: string): void {
    this.loginType = loginType;
  }

}
