import { Component } from '@angular/core';
import '../assets/js/slider';

declare var init_slider: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webroot';
  public loggedIn: Boolean = false;

  
  ngAfterViewInit() {
    setTimeout(function() {
      init_slider();
    }, 1);
  }
}
