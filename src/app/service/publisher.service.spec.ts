import { TestBed, getTestBed } from '@angular/core/testing';

import { PublisherService } from './publisher.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Publisher } from '../model/publisher';

fdescribe('PublisherService', () => {
  let service: PublisherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PublisherService]
    });

    httpMock = getTestBed().get(HttpTestingController);
    service = getTestBed().get(PublisherService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all publishers from http', () => {
    // arrange
    const dummyPublishers: Publisher[] = [
      { publisherid: 1, publishername: 'testPublisher'}
    ];

    // act
    service.getPublishersList().subscribe(res => {
      expect(res.length).toBe(1);
      expect(res).toEqual(dummyPublishers);
    });

    // http mock
    const req = httpMock.expectOne(service.publisherUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPublishers);

  });

});
