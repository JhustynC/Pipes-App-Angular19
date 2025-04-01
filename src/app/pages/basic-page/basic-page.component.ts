import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  LOCALE_ID,
  signal,
} from '@angular/core';
import { AvailableLocal, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {
  localService = inject(LocalService);
  currentLocal = signal(inject(LOCALE_ID));
  nameLower = signal('Jhustyn');
  nameUpper = signal('JHUSTYN');
  fullName = signal('JhUStyN carVAJAL');
  customDate = signal(new Date());

  tickinDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });

  changeLocal(local: AvailableLocal) {
    this.localService.setLocal = local;
    console.log(`changed to ${local}`);
  }
}
