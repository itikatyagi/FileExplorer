import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="header">
      <img  class="logo" src="../assets/images/logo_light-theme.png"/>
    </div>
    <hr>
    <div class="container">
      <app-main></app-main>
    </div>
  `,
  styles: [`
    .header{
      
    }
    .container{
      
    }
    .logo{
      padding:5px;
    }
  `]
})
export class AppComponent {

}
