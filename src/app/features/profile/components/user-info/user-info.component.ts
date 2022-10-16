import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user_model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
 @Input() user: UserModel | undefined; 

  constructor() {}

  ngOnInit(): void {}
}
