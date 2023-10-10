import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { HttpService } from './http.service';
import redirectUrl from 'src/app/constants/redirectUrl';
import { HttpHeaders } from '@angular/common/http';
import token from 'src/app/constants/tokenUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) { }

  public codeStr : string =  '';

  getToken() {
    const mockUserClient = 'client';
      const mockUserSecret = 'secret';
      const basicAuth = `Basic ` + Buffer.from(`${mockUserClient}:${mockUserSecret}`).toString('base64');
      const headers = new HttpHeaders({
        'content-type' : 'application/json',
        'authorization' : basicAuth
      });
      const options = {
        headers
      }

      return this.httpService.doPost(token(this.codeStr), null, options) ;
  }
}
