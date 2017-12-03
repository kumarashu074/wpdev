import { AppComponent } from '../../../app.component';
import { AuthService } from '../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  returnUrl: string;

  constructor(private authenticationService: AuthService, private router: Router, private route: ActivatedRoute,
    private appComponent: AppComponent) {
    this.appComponent.loggedIn = false;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  ngOnInit() {
    this.authenticationService.logout();
    this.router.navigate([this.returnUrl]).then(
                                function(){
                                    console.log('navigate success');
                                },
                                function(){
                                    console.log('navigate failure');
                                }
                              );


  }

}
