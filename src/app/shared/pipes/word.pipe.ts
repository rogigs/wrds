import { Pipe, PipeTransform } from '@angular/core';
import { Word } from '../../services/words-api.service';
import { exampleWordResponse } from '../../services/responses/words-api.response';

type WordArr = typeof exampleWordResponse.results;

@Pipe({
  name: 'word',
  standalone: true,
})
export class WordPipe implements PipeTransform {
  transform(value: Word): WordArr {
    return value.results;
  }
}
