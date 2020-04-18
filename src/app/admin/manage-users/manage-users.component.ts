import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../auth/auth.service';
import User from '../../shared/interfaces/interfaces'

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  users:  User[];
  isLoading: boolean = false;
  currentUser: User;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentUserValue.subscribe(user => this.currentUser = user)
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.userService.getAll().subscribe( users => {
      this.isLoading = false;
      this.users = users;
    })
  }

  deleteUser(userId: number) {
    let confirm = window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?');
    if(confirm) {
      this.userService.delete(userId).subscribe( () => {
        this.getUsers();
      });
    }
  }
}