import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publisher } from '../model/publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private publisherUrl = 'http://localhost:8080/books-server/publishers';

  constructor(private http: HttpClient) { }

  getPublisher(publisherid: number): Observable<any> {
    return this.http.get(`${this.publisherUrl}/${publisherid}`);
  }

  // tslint:disable-next-line:ban-types
  createPublisher(publisher: Publisher): Observable<Object> {
    return this.http.post(`${this.publisherUrl}`, publisher);
  }

  // tslint:disable-next-line:ban-types
  updatePublisher(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.publisherUrl}/${id}`, value);
  }

  deletePublisher(publisherid: number): Observable<any> {
    return this.http.delete(`${this.publisherUrl}/${publisherid}`, { responseType: 'text' });
  }

  getPublishersList(): Observable<any> {
    return this.http.get(`${this.publisherUrl}`);
  }
}
