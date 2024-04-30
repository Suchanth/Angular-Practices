import { Component,OnChanges,OnInit,Input, SimpleChanges } from '@angular/core';
import { HooksComponent } from '../hooks/hooks.component';

@Component({
  selector: 'app-hook-child',
  standalone: true,
  imports: [
    HooksComponent
  ],
  templateUrl: './hook-child.component.html',
  styleUrl: './hook-child.component.css'
})
export class HookChildComponent implements OnInit,OnChanges {
  @Input() parentData:string[]=[];
  constructor(){
    console.log("Constructor is called!!!");
  }

  ngOnInit(){
    console.log("NgOnInit is called!!!")
  }
  ngOnChanges(changes:SimpleChanges) {
    console.log("NgOnChanges is called!!!",changes)
  }
}
