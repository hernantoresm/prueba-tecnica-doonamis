import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() voteAverage?: number;
  @Input() date?: string;
  @Input() seasonInfo?: string;
  @Input() seasonPoster?: string;
  constructor() {}

  ngOnInit(): void {}
}
