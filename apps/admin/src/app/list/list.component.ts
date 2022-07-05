import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SlidesService } from '@podname/data';
import { Slide } from '@podname/api-interfaces';

@Component({
  selector: 'podname-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  slides$: Observable<Slide[]> = new Observable<Slide[]>();

  constructor(private readonly service: SlidesService) {}

  ngOnInit(): void {
    this.loadSlides();
  }

  loadSlides() {
    this.slides$ = this.service.all();
  }
}
