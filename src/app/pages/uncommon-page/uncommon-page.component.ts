import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Jhustyn',
  gander: 'male',
  age: 23,
  address: 'Cuenca, Ecuador',
};
const client2 = {
  name: 'Carolina',
  gander: 'female',
  age: 25,
  address: 'Quito, Ecuador',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent {
  client = signal(client1);

  invatationMap = {
    male: 'Sr.',
    female: 'Mr.',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  //i18N PLURAL PIPE
  clientsMap = signal({
    '=0': "We currently haven't custimers waiting.",
    '=1': 'We currently have # client waiting.',
    other: 'We currently have # clients waiting .',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Andrea',
    'Carlos',
    'Fernanda',
  ]);

  deleteClient() {
    this.clients().pop();
  }

  // KeyValuePipe
  profile = {
    name: 'Jhustyn',
    gander: 'male',
    age: 23,
    address: 'Cuenca, Ecuador',
  };

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
      console.log('Promesa finalizada');
    }, 3500);
  });

  myObsevableTimer = interval(1000).pipe(
    tap((value) => console.log('tap', value))
  );
}
