import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://images.axios.com/bV8riMeQB6VG9t4UZw5_poC83oc=/0x177:5487x3263/1920x1080/2018/04/17/1523996370270.jpg',
      149.99
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris!',
      'https://thenypost.files.wordpress.com/2018/09/180905-alex-jones-facebook-twitter-feature.jpg?quality=90&strip=all&w=1200',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://thenypost.files.wordpress.com/2018/08/tech_companies_free_speech.jpg?quality=90&strip=all&w=1200',
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
