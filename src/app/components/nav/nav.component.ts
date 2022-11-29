import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  token = '';
  profile: User | null = null;

  constructor(
    private storeService: StoreService,
    private userService : UsersService,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login(){
    this.authService.loginAndGet('jhoanmateofranco@gmail.com','12345')
    .subscribe(user =>{
      this.profile = user;
    });
  }

}
