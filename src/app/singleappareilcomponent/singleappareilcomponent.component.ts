import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../service/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-singleappareilcomponent',
  templateUrl: './singleappareilcomponent.component.html',
  styleUrls: ['./singleappareilcomponent.component.css']
})
export class SingleappareilcomponentComponent implements OnInit {
  name: string;
  status: boolean;

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;
  }

}
