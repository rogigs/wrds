import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WordsApiService, Word } from '../../services/words-api.service';
import { GridComponent } from '../../components/grid/grid.component';

import { AppMaterialModule } from '../../shared/app-material.module';
import { WordPipe } from '../../shared/pipes/word.pipe';

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
    WordPipe,
  ],
  providers: [WordsApiService],
  templateUrl: './words.component.html',
  styleUrl: './words.component.sass',
})
export class WordsComponent {
  title = 'wrds';
  word = '';
  words: Word | undefined;

  constructor(private wordsApiService: WordsApiService) {}

  onSubmit() {
    this.wordsApiService
      .getWord(this.word)
      .subscribe((words) => (this.words = words));
  }

  log(val: any) {
    console.log(val);
  }
}
