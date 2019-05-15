import { Component, OnInit, Input } from '@angular/core';
import {Observable, observable} from 'rxjs';
@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.css' ]
})

export class NavigationComponent implements OnInit{
   @Input() title:string
   constructor(){
      
   }
   
   ngOnInit(){
    
   }
}