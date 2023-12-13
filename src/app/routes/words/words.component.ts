import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  WordsApiService,
  WordDefinition,
} from '../../services/words-api.service';
import { GridComponent } from '../../components/grid/grid.component';

@Component({
  selector: 'app-words',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    GridComponent,
  ],
  providers: [WordsApiService],
  templateUrl: './words.component.html',
  styleUrl: './words.component.sass',
})
export class WordsComponent {
  title = 'wrds';
  word = '';
  definitions: WordDefinition | undefined = undefined;

  constructor(private wordsApiService: WordsApiService) {}

  onSubmit() {
    this.wordsApiService
      .getWord(this.word)
      .subscribe((definitions) => (this.definitions = definitions));
  }
}
