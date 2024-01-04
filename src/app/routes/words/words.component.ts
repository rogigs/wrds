import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  WordsApiService,
  WordDefinition,
} from '../../services/words-api.service';
import { GridComponent } from '../../components/grid/grid.component';

import { AppMaterialModule } from '../../shared/app-material.module';

@Component({
  selector: 'app-words',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    GridComponent,
    AppMaterialModule,
  ],
  providers: [WordsApiService],
  templateUrl: './words.component.html',
  styleUrl: './words.component.sass',
})
export class WordsComponent {
  title = 'wrds';
  word = '';
  words: WordDefinition | undefined;

  constructor(private wordsApiService: WordsApiService) {}

  onSubmit() {
    this.wordsApiService
      .getWord(this.word)
      .subscribe((words) => (this.words = words));
  }
}
