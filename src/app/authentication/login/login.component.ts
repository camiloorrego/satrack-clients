import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(public service: LoginService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    const body = {
      email: this.user.value,
      password: this.password.value
    };

    this.service.login(body).subscribe((response: any) => {
      console.log('OK');
      this.router.navigate(['clients']);
    }, (e: any) => {
      console.log('ERROR');
      console.log(e);
    });
  }
}
