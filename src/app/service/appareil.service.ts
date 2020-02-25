import { Injectable } from '@angular/core';
import {Appareil} from '../model/appareil';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  appareils: Appareil[] = [
    {
      id:1,
      name: 'ps4',
      status: false,
    },
    {
      id:2,
      name: 'moto',
      status: true,
    },
    {
      id:3,
      name: 'tv',
      status: false,
    }
  ];

  constructor() {
  }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = true;
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = false;
      this.emitAppareilSubject();
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = true;
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = false;
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  addAppareil(name: string, status: boolean) {
    const appareilObject: Appareil = {
      id: 0,
      name: '',
      status: false
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
}
