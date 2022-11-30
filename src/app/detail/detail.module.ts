import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';
import { EpisodesSwimlaneComponent } from './episodes-swimlane/episodes-swimlane.component';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { SideBarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SideBarComponent,
    ShowDetailComponent,
    ReviewsComponent,
    EpisodeCardComponent,
    EpisodesSwimlaneComponent,
    DetailComponent,
  ],
  imports: [CommonModule, SharedModule, DetailRoutingModule],
})
export class DetailModule {}
