import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImapComponent } from '../imap/imap.component'

@NgModule({
  declarations: [ImapComponent],
  imports: [
    CommonModule
  ], 
  exports: [
  	ImapComponent
  ],
  entryComponents:[ImapComponent]
})
export class ComponentModule { }
