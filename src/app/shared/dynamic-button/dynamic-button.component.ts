import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'app-dynamic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-button.component.html',
  styleUrl: './dynamic-button.component.scss'
})
export class DynamicButtonComponent {

  public textButton  =  input.required<string>();
  public typeButton  =  input.required<string>();

  public backgroundColor:string = '';
  public borderColor:string = '';

  ngOnInit(): void {
    this.setInitialColors();
  }

  private setInitialColors(): void {
    if (this.typeButton() === 'primary') {
      this.backgroundColor = '#007bff';
      this.borderColor = '#000000';
    } else if (this.typeButton() === 'secondary') {
      this.backgroundColor = '#6c757d';
      this.borderColor = '#ffffff';
    }
  }

}
