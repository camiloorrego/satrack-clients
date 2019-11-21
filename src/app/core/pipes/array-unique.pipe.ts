import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayUnique'
})
export class ArrayUniquePipe implements PipeTransform {

  transform(arrayElements: any[], args?: any): any {
    return arrayElements.filter((item, index) => arrayElements.indexOf(item) === index);
  }
}
