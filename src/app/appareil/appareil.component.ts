import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Appareil} from '../model/appareil';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  // decorator
  @Input() appareil: Appareil;


    constructor() {

  }

  ngOnInit() {
  }


  getColor(){
    return this.appareil.status ? 'green' : 'red';
  }

  getStatus(){
    return this.appareil.status;
  }

}
