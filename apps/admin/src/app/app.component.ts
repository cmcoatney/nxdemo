import { Component, OnInit } from '@angular/core';
import { Slide } from '@podname/api-interfaces';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'podname-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'admin';
  slides$: Observable<Slide[]> = new Observable<Slide[]>();


  constructor(private readonly service: AppService) {}

  ngOnInit(): void {
    this.loadSlides();
  }

  loadSlides() {
    this.slides$ = this.service.all();
  }
}
