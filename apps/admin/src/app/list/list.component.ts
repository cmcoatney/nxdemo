import { Component, OnInit } from '@angular/core';
import { Slide } from '@podname/api-interfaces';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'podname-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  slides$: Observable<Slide[]> = new Observable<Slide[]>();

  constructor(private readonly service: AppService) {}

  ngOnInit(): void {
    this.loadSlides();
  }

  loadSlides() {
    this.slides$ = this.service.all();
  }
}
