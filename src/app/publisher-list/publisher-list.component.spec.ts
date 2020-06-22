import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherListComponent } from './publisher-list.component';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';
import { Publisher } from '../model/publisher';
import { PublisherService } from '../service/publisher.service';
// import { Observable } from 'rxjs';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';


describe('PublisherListComponent', () => {
  let component: PublisherListComponent;
  let fixture: ComponentFixture<PublisherListComponent>;
 // let debugElement: DebugElement;
 // let htmlElement: HTMLElement;
  let service: PublisherService;
  // tslint:disable-next-line:prefer-const
  let publishers: Observable<Publisher[]>;
  // tslint:disable-next-line:prefer-const
  let router: Router;

  beforeEach(async(() => {

    service = new PublisherService(null);
    component = new PublisherListComponent(service, router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should set publishers property with the items returned', () => {
    // Arrange - Setup
    // tslint:disable-next-line:no-shadowed-variable
    const publishers: Publisher[] = [
      {
        publisherid: 1,
        publishername: 'Doe Publishers'
      },
      {
        publisherid: 2,
        publishername: 'Tony Publishers'
      },
      {
        publisherid: 3,
        publishername: 'Blake Publishers'
      }
    ];

   // spyOn(service, 'getPublishersList').and.callFake(() => {
    spyOn(service, 'getPublishersList').and.returnValue(from([publishers]));
      // return Observable.from([publishers]);
    });

    // Make the call
  // component.ngOnInit();

    // Assert - Check to see if the test passes
  // expect(component.publishers).toEqual('publishers');

  });

