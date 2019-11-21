import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizecomment'
})
export class SizecommentPipe implements PipeTransform {

  transform(value: string, limit: number) {
    if (value && value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }

}
