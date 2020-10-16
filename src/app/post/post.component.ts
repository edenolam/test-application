import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // decorator
  @Input() title: string;
  @Input() content: string;
  @Input() lovelts: number;
  constructor() { }

  ngOnInit() {
  }

  getTitle(){
    return this.title;
  }

  getContent(){
    return this.content;
  }

  getColor(){
    return this.lovelts ? 'green' : 'red';
  }

  onLove() {
    return this.lovelts++;
  }

  ondontLove() {
    return this.lovelts--;
  }

}
