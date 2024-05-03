import { Component,EventEmitter,Input,Output } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() inputData:string='';
  @Output() outputEvent=new EventEmitter<string>();

  emitEvent(){
    this.outputEvent.emit('Hello from the Angular')
  }
}
