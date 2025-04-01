import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [PercentPipe, DecimalPipe, CurrencyPipe],
  templateUrl: './numbers-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumbersPageComponent {
  totalSell = signal(2_434_000.5567);
  percent = signal(0.4856);
}
