import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { HttpService } from 'src/service/http.service';
import demoUrl from '../constants/demo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 public demoContent : string = '';

  constructor(private httpService: HttpService){}
  
  ngOnInit(): void {
    this.getDemoInformation();
    console.log('Home')
  }

  private getDemoInformation() {
    const token = sessionStorage.getItem('id_token')
    const bearerToken = `Bearer ${token}`;
    const options = {
      headers : new HttpHeaders({
        'Authorization':bearerToken
      }),
      responseType:'text/plain'
    }

    this.httpService.doGet(demoUrl(), options).pipe(take(1)).subscribe((res) => {
      this.demoContent = res.toString();
    });

  }

}
