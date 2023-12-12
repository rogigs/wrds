import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { WordsApiService } from './services/words-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './components/grid/grid.component';

@Component({
  selector: 'app-root',
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
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  providers: [WordsApiService],
})
export class AppComponent {
  title = 'wrds';
  word = '';
  definitions: any = {
    word: 'Example',
    results: [
      {
        definition: 'For build a css',
        examples: ['To delete', 'To delete after'],
      },
    ],
  };

  constructor(private wordsApiService: WordsApiService) {}

  onSubmit() {
    this.wordsApiService
      .getWord(this.word)
      .subscribe((definitions) => (this.definitions = definitions));
  }
}
