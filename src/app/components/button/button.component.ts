import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})
export class ButtonComponent {
  @Input() text = 'Button';
  @Input() type : 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
}
