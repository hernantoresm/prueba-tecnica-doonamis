import { Component, Input, OnInit } from '@angular/core';
import { SeriesModel } from '../models/series.model';

@Component({
  selector: 'app-swimlanes',
  templateUrl: './swimlanes.component.html',
  styleUrls: ['./swimlanes.component.scss'],
})
export class SwimlanesComponent implements OnInit {
  @Input() categoryName?: string;
  @Input() series?: Array<SeriesModel>;
  swiperBreakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 7.5,
      spaceBetween: 10,
    },
  };
  constructor() {}

  ngOnInit() {}
}
