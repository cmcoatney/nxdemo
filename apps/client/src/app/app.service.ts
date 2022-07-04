import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Slide } from '@podname/api-interfaces';

const API_ENDPOINT = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  model = 'slides';

  constructor(private readonly http: HttpClient) {}

  private getUrl() {
    return `${API_ENDPOINT}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `{this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<Slide[]>(this.getUrl());
  }

  find(id: string){
    return this.http.get<Slide[]>(this.getUrlWithId(id));
  }
}
