import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss'],
})
export class EpisodeCardComponent implements OnInit {
  @Input() name?: string;
  @Input() picture?: string;

  constructor() {}

  ngOnInit(): void {}
}
