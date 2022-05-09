import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooComponent } from './foo/foo.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, FooComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'lonely-components';
}
