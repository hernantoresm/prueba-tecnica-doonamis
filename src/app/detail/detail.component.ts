import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeModel, SeasonModel } from '../shared/models/series.model';
import { SeriesService } from '../shared/services/series.service';
import { EpisodeService } from './services/episode.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  season?: SeasonModel;
  episode?: EpisodeModel;
  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService
  ) {}

  ngOnInit() {
    this.episodeService
      .getEpisodeDetail(this.route.snapshot.params['id'])
      .then((res) => {
        this.episode = res;
      });

    this.episodeService
      .getSeasonDetail(this.route.snapshot.params['id'])
      .then((res) => {
        this.season = res;
      });
  }
}
