import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppareilService} from '../service/appareil.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.css']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = true;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const status = form.value.status;
    this.appareilService.addAppareil(name, status);
  }

}
