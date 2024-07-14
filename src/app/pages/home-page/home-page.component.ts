import { Component } from '@angular/core';
import { DynamicButtonComponent } from 'app/shared/dynamic-button/dynamic-button.component';
import { IntroTitleComponent } from 'app/shared/intro-title/intro-title.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IntroTitleComponent, DynamicButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

    public title:string = "Trivial"
    
}
