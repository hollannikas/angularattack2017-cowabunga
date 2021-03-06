import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value === null || typeof value !== 'number') {
      return '-';
    }
    if (value < 1) {
      return Math.round(value * 10) + ' m';
    }
    return Math.round(value * 10) / 10 + ' km';
  }
}
