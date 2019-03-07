import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'epl-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  pageTitle = 'My Profile';

  constructor() { }

  ngOnInit() {
  }

}
