import { Component, OnInit, inject, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css'],
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject(UsersServiceService);
  public userId = signal<number>(1);
  public user = signal<User | undefined>(undefined);
  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;
    this.userId.set(id);
    this.user.set(undefined);
    this.userService.getUserById(this.userId()).subscribe((user) => {
      this.user.set(user);
    });
  }
}
