import { Component } from '@angular/core';
import { IntroTitleComponent } from 'app/shared/intro-title/intro-title.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IntroTitleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

    public title:string = "Trivial"
    
}
