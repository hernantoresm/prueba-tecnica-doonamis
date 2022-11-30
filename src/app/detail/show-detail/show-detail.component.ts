import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent implements OnInit {
  @Input() detail?: string;
  @Input() picture?: string;
  @Input() title?: string;
  constructor() {}

  ngOnInit(): void {}
}
