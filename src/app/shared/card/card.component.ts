import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() name?: string;
  @Input() posterPath?: string;
  @Input() id?: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToShow() {
    this.router.navigate(['/detail/' + this.id]);
  }
}
