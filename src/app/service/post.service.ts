import { Injectable } from '@angular/core';
import {Post} from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    {
      title: 'un title',
      content: 'un content',
      lovelts: 10,
      created_at: new Date()
    },
    {
      title: 'un title 2',
      content: 'un content 2',
      lovelts: 20,
      created_at: new Date()
    },
    {
      title: 'un title 3',
      content: 'un content 3',
      lovelts: 30,
      created_at: new Date()
    }
  ];
  constructor() { }
}
