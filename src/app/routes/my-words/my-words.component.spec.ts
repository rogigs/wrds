import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWordsComponent } from './my-words.component';

describe('MyWordsComponent', () => {
  let component: MyWordsComponent;
  let fixture: ComponentFixture<MyWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
