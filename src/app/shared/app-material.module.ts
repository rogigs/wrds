import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class AppMaterialModule {}
