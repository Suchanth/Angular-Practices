import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {
  count = 0;
  get calculated(){
    return this.count *2;
  }
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }
}
