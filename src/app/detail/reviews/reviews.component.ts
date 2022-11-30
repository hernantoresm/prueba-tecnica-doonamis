import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  @Input() voteAverage?: number;
  @Input() date?: string;
  @Input() seasonInfo?: string;
  @Input() seasonPoster?: string;
  constructor() {}

  ngOnInit(): void {}
}
