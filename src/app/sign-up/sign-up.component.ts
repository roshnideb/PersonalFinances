import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from '../account.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  //userid, password, fname, lname, email

  submitted = false;
  model = new User(0,'','','','');

  constructor (
    private service: AccountService,
    private router: Router,
    private cookie: CookieService,
  ) { }

  ngOnInit() {
    this.cookie.set('user_id','');
  }

  onSubmit() {
    /*this.service.doesEmailExist(this.model.email)
      .subscribe(user =>
        {
          console.log("here1");
          if (user==null) {
            console.log("here");
            this.service.signup(this.model)
              .subscribe(user=>{
                this.cookie.set('user_id',user.userid.toString());
              });
            //this.cookie.set('user_id',this.model.userid.toString());
            this.submitted=true;
            this.router.navigateByUrl('/profile');
            window.location.replace('/profile');
          }
        })
  }*/

  this.service.signup(this.model)
    .subscribe(user=> {
      if (user.userid!=0) {
        this.cookie.set('user_id',user.userid.toString());
        this.submitted =true;
      this.router.navigateByUrl('/profile');
      window.location.replace('/profile');
      }
      else {
        console.log("user exists");
      }
    });
    

  }


}
