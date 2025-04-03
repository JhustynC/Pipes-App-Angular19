import {
  ChangeDetectionStrategy,
  Component,
  linkedSignal,
  signal,
} from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heros.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { ColorPipe } from '../../pipes/color.pipe';
import { Color, ColorMap } from '../../interfaces/hero.interface';
import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HeroTextPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, ColorPipe, CommonModule, HeroTextPipe, TitleCasePipe, HeroCreatorPipe, UpperCasePipe],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPageComponent {
  public name = 'Jhustyn';

  toggleCase = linkedSignal(() => false);

  heroes = signal(heroes);

  getColorClass(color: Color): string {
    console.log(ColorMap[color]);
    return `${ColorMap[color]}`;
  }
}
