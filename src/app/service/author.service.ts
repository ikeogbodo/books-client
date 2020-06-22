import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  public authorUrl = 'http://localhost:8080/books-server/authors';

  constructor(private http: HttpClient) { }

  getAuthor(authorid: number): Observable<any> {
    return this.http.get(`${this.authorUrl}/${authorid}`);
  }

  createAuthor(author: Author): Observable<object> {
    return this.http.post(`${this.authorUrl}`, author);
  }

  updateAuthor(authorid: number, value: any): Observable<object> {
    return this.http.put(`${this.authorUrl}/${authorid}`, value);
  }

  deleteAuthor(authorid: number): Observable<any> {
    return this.http.delete(`${this.authorUrl}/${authorid}`, { responseType: 'text' });
  }

  getAuthorsList(): Observable<any> {
    return this.http.get(`${this.authorUrl}`);
  }
}
