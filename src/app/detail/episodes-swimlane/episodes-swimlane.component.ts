import { Component, Input, OnInit } from '@angular/core';
import { SeasonModel } from 'src/app/shared/models/series.model';

@Component({
  selector: 'app-episodes-swimlane',
  templateUrl: './episodes-swimlane.component.html',
  styleUrls: ['./episodes-swimlane.component.scss'],
})
export class EpisodesSwimlaneComponent implements OnInit {
  swiperBreakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 5.5,
      spaceBetween: 10,
    },
  };
  @Input() seasons?: SeasonModel;

  constructor() {}

  ngOnInit(): void {}
}
