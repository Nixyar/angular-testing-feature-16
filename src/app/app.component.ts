import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstName = signal('Oleg');
  lastName = signal('Frontend');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  setName(newName: string) {
    this.firstName.set(this.firstName() === 'Oleg' ? newName : 'Oleg');
  }
}
