import {
  ChangeDetectionStrategy,
  Component,
  linkedSignal,
  signal,
} from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heros.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPageComponent {
  public name = 'Jhustyn';

  toggleCase = linkedSignal(() => false);

  heroes = signal(heroes);
}
