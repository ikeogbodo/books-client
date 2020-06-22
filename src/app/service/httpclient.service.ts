import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class User {
  constructor(
    public userid: number,
    public username: string,
    public password: string,
    public email: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:8080/books-server/authenticate');
  }

  public deleteUser(user) {
    return this.httpClient.delete<User>(
      'http://localhost:8080/books-server/authenticate' + '/' + user.userid
    );
  }

  public createEmployee(user) {
    return this.httpClient.post<User>(
      'http://localhost:8080/books-server/authenticate',
      user
    );
  }
}
