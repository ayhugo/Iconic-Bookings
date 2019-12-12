import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'ass',
      'ytb',
      'https://images.axios.com/bV8riMeQB6VG9t4UZw5_poC83oc=/0x177:5487x3263/1920x1080/2018/04/17/1523996370270.jpg',
      69.99
    ),
    new Place(
      'p2',
      'tits',
      'ytb',
      'https://images.axios.com/bV8riMeQB6VG9t4UZw5_poC83oc=/0x177:5487x3263/1920x1080/2018/04/17/1523996370270.jpg',
      420
    ),
  ];

  get places() {
    return [...this._places];
  }
  constructor() {}
}
