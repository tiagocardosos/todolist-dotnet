import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TodoService);
  });

  it('should ...', inject([HttpClient], (httpClient: HttpClient) => {
    expect(service).toBeTruthy();
  }));
});
