import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { SeriesModel } from '../models/series.model';

interface SeriesResponse {
  page: number;
  results: Array<SeriesModel>;
  total_results: number;
  total_pages: number;
}

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private http: HttpClient) {}

  public getPopularSeries(): Promise<Array<SeriesModel>> {
    return firstValueFrom(
      this.http.get<SeriesResponse>(
        `https://api.themoviedb.org/3/tv/popular?api_key=${environment.apiKey}&language=en-US&page=1`
      )
    ).then((res) => {
      return res.results;
    });
  }

  public getTopRatedSeries(): Promise<Array<SeriesModel>> {
    return firstValueFrom(
      this.http.get<SeriesResponse>(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${environment.apiKey}&language=en-US&page=1`
      )
    ).then((res) => {
      return res.results;
    });
  }
}
