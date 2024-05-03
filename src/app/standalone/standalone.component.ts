import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-standalone',
  standalone: true,
  providers:[],
  imports: [],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.css'
})
export class StandaloneComponent {
  testService:TestService=inject(TestService)

}
