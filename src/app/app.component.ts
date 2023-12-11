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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  providers: [WordsApiService],
})
export class AppComponent {
  title = 'wrds';
  word = 'world';
  definitions: any = '';

  constructor(private wordsApiService: WordsApiService) {}

  ngOnInit(): void {
    this.wordsApiService
      .getWord(this.word)
      .subscribe((definitions) => (this.definitions = definitions));
    console.log(this.definitions);
  }
}
