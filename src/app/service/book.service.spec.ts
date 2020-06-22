import { TestBed, getTestBed } from '@angular/core/testing';
import { BookService } from './book.service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Book } from '../model/book';

fdescribe('BookService', () => {
  let httpMock: HttpTestingController;
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });

    httpMock = getTestBed().get(HttpTestingController);
    service = getTestBed().get(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all books from http', () => {
    // arrange
    const dummyBooks: Book[] = [
      { bookid: 1, title: 'titleOne', authorid: 2, publisherid: 3, publisheddate: new Date(), pages: 100 }
    ];

    // act
    service.getBooksList().subscribe(res => {
      expect(res.length).toBe(1);
      expect(res).toEqual(dummyBooks);
    });

    // http mock
    const req = httpMock.expectOne(service.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyBooks);
    // assert

  });


});
