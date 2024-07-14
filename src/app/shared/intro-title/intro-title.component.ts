import { Component, input } from '@angular/core';

@Component({
  selector: 'app-intro-title',
  standalone: true,
  imports: [],
  templateUrl: './intro-title.component.html',
  styleUrl: './intro-title.component.scss'
})
export class IntroTitleComponent {

  public title  =  input.required<string>();

}
