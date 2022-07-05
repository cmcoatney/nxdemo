import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NxComponent } from './nx/nx.component';

@NgModule({
  imports: [CommonModule],
  exports: [NxComponent],
  declarations: [NxComponent],
})
export class UiModule {}
