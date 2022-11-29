import { Component } from '@angular/core';
import Swal from 'sweetalert2';

import {AuthService} from './services/auth.service';
import { FilesService } from './services/files.service';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';

  constructor(
    private userService:UsersService,
    private fileService:FilesService
  ){

  }

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser(){
    this.userService.create({
      name: 'jhoan',
      email: 'jhoanmateofranco@gmail.com',
      password:'12345'
    }).subscribe(rta =>{
      console.log(rta);
    });
  }

  downloadPDF(){
    this.fileService.getFile('my.pdf','https://young-sands-07814.herokuapp.com/api/files/dummy.pdf','application/pdf')
    .subscribe();
  }
}
