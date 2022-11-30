import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'picture',
})
export class PicturePipe implements PipeTransform {
  transform(value: string | undefined): string | undefined {
    if (!value) {
      return value;
    }
    return 'https://image.tmdb.org/t/p/w500' + value;
  }
}
