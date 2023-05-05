import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from '../account.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AccountService,
    private cookie: CookieService,
    private app: AppComponent
  ) {this.route.paramMap.subscribe(params=> {
    this.ngOnInit();
  });}

  ngOnInit() {
    this.cookie.set('user_id','');
  }

  onSubmit() {
    alert("Logging in")
    this.service.login(this.email, this.password)
      .subscribe(
        user=>
        {
          alert("Login 2")
          if (user!=null) {
            alert("Login 3")
            this.cookie.set('user_id', user.userid.toString());
            this.router.navigateByUrl('/profile');
            window.location.replace('/profile');
          }
        }
      )
  }

  signup() {
    this.router.navigate(['signup']);
  }

  
  

}
