import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(value: number): any {
    console.log(Color[0]);
    return Color[value];
  }
}
