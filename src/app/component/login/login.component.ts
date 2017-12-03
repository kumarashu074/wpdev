import { User } from '../../models/user.model';
import { AlertService } from '../../services/alert/alert.service';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/auth/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService,
        private alertService: AlertService,
        private userService: UserService ) { }

    ngOnInit() {
        // reset login status

        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.name, this.model.password)
            .subscribe(
                (token: any) => {
                   console.log('loading user with token:' + token);
                   // moke call to server
                      const user: User = new User(
                        1, 'Bruno', 'Lopes', 'blopes', 'bruno.lourenco.lopes@gmail.com', 'admin');
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        console.log(this.returnUrl);
                        console.log(this.route);
                        this.router.navigate([this.returnUrl], {relativeTo: this.route}).then(
                                function(){
                                    console.log('navigate success');
                                },
                                function(){
                                    console.log('navigate failure');
                                }
                              );

//                   this.userService.getUserByToken(token).subscribe(
//                     (user: User) => {
//                        // store user details and jwt token in local storage to keep user logged in between page refreshes
//                        localStorage.setItem('currentUser', JSON.stringify(user));
//                        this.router.navigate([this.returnUrl], {relativeTo: this.route}).then(
//                                function(){
//                                    console.log('navigate success');
//                                },
//                                function(){
//                                    console.log('navigate failure');
//                                }
//                              );
//                     }
//                   );
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
