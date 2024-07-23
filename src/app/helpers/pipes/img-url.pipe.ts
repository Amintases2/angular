import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrl',
  standalone: true,
})
export class ImgUrlPipe implements PipeTransform {
  transform(value: string | null): unknown {
    if (!value) {
      return null;
    }
    return `https://ichroniakov.ru/yt-course/${value}`;
  }
}
