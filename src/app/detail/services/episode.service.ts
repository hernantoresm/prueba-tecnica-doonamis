import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { EpisodeModel, SeasonModel } from 'src/app/shared/models/series.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor(private http: HttpClient) {}

  getEpisodeDetail(
    tvId: number,
    season: number = 1,
    episode: number = 1
  ): Promise<EpisodeModel> {
    return firstValueFrom(
      this.http.get<EpisodeModel>(
        `https://api.themoviedb.org/3/tv/${tvId}/season/${season}/episode/${episode}?api_key=${environment.apiKey}&language=en-US`
      )
    ).then((res) => {
      return res;
    });
  }

  getSeasonDetail(tvId: number, season: number = 1): Promise<SeasonModel> {
    return firstValueFrom(
      this.http.get<SeasonModel>(
        `https://api.themoviedb.org/3/tv/${tvId}/season/${season}?api_key=${environment.apiKey}&language=en-US`
      )
    ).then((res) => {
      return res;
    });
  }
}
