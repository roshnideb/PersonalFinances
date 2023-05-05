import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor (
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe(params=> {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    
  }
}
