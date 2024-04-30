import { Component, OnInit } from '@angular/core';
import { HookChildComponent } from '../hook-child/hook-child.component';
import { FormsModule} from '@angular/forms';
import { Products } from './products';

@Component({
  selector: 'app-hooks',
  standalone: true,
  imports: [HookChildComponent,
    FormsModule
  ],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.css'
})
export class HooksComponent implements OnInit {
  data:string[]=[];
  constructor(){

  }
  ngOnInit(){
    
  }
  handleData(e:any){
    this.data=e.target.value;
  }
  
}
