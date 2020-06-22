import { TestBed, getTestBed } from '@angular/core/testing';

import { AuthorService } from './author.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Author } from '../model/author';

fdescribe('AuthorService', () => {
  let service: AuthorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorService]
    });

    httpMock = getTestBed().get(HttpTestingController);
    service = getTestBed().get(AuthorService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all authors from http', () => {
    // arrange
    const dummyAuthors: Author[] = [
      { authorid: 1, authorname: 'testauthor'}
    ];

    // act
    service.getAuthorsList().subscribe(res => {
      expect(res.length).toBe(1);
      expect(res).toEqual(dummyAuthors);
    });

    // http mock
    const req = httpMock.expectOne(service.authorUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAuthors);

  });

});
