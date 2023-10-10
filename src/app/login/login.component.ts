import { Component, OnInit } from '@angular/core';
import redirectUrl from '../constants/redirectUrl';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    
  }


  redirect() {
    window.location.href = redirectUrl();
  }
}
