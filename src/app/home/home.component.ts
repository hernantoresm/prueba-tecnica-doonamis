import { Component, OnInit } from '@angular/core';
import { SeriesModel } from '../shared/models/series.model';
import { SeriesService } from '../shared/services/series.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  topRatedSeries: Array<SeriesModel> | undefined;
  popularSeries: Array<SeriesModel> | undefined;

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.getPopularSeries();
    this.getTopRatedShows();
  }

  getTopRatedShows() {
    this.seriesService.getTopRatedSeries().then((topRatedSeries) => {
      this.topRatedSeries = topRatedSeries;
    });
  }

  getPopularSeries() {
    this.seriesService.getPopularSeries().then((popularSeries) => {
      this.popularSeries = popularSeries;
    });
  }
}
