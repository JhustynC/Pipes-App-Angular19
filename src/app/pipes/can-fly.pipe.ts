import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canfly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'can fly' : "can't fly";
  }
}
