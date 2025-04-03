import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase', // 'jhustyn' | toggleCase
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, upper: boolean = false): string {
    if (upper) return value.toUpperCase();
    return upper ? value.toUpperCase() : value;
  }
}
