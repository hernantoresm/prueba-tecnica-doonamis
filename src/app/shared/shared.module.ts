import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card.component';
import { SwimlanesComponent } from './swimlanes/swimlanes.component';
import { SwiperModule } from 'swiper/angular';
import { PicturePipe } from './pipe/picture.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CardComponent,
    SwimlanesComponent,
    PicturePipe,
  ],
  imports: [CommonModule, SwiperModule, IonicModule.forRoot()],
  exports: [
    FooterComponent,
    HeaderComponent,
    IonicModule,
    CardComponent,
    SwimlanesComponent,
    SwiperModule,
    PicturePipe,
  ],
})
export class SharedModule {}
