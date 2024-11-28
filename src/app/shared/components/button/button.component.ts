import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '@angular/router';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'label';
  @Input() iconName: string = 'home';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;

  @Output() onClick = new EventEmitter<Event>();

  get iconClass() {
    return {
      'icon': true,
      [`icon-${this.iconName}`]: true
    }
  }
}
