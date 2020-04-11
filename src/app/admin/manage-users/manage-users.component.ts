import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import User from '../../shared/interfaces/interfaces'

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  users:  User[];
  isLoading: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.userService.getAll().subscribe( users => {
      this.isLoading = false;
      this.users = users;
    })
  }
}