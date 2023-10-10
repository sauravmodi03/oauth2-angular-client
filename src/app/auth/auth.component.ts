import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  
  constructor(private authService: AuthService, private activateRoute: ActivatedRoute, private router : Router){
    this.getAuthorizationCode();
  }
  
  ngOnInit(): void {
      this.authService.getToken().pipe(take(1)).subscribe((tokens) => {
        console.log('tokens === ', tokens);
        if((tokens as any)?.id_token) {
          sessionStorage.setItem('id_token', (tokens as any)?.id_token);
          sessionStorage.setItem('refresh_token', (tokens as any)?.refresh_token);
          this.router.navigate(['/home']);
        }
    })
  }

  getAuthorizationCode() {
    this.activateRoute.queryParams.subscribe((params) => {
      if(params?.['code']) {
        this.authService.codeStr  =  params['code'];
       
      }
      


    })
  }

  // //To not get memory leaks
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  
}
