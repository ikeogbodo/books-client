import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorDetailsComponent } from '../author-details/author-details.component';
import { Observable } from 'rxjs';
import { AuthorService } from '../service/author.service';
import { Author } from '../model/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Observable<Author[]>;

  constructor(private authorService: AuthorService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.authors = this.authorService.getAuthorsList();
  }

  deleteAuthor(authorid: number) {
    this.authorService.deleteAuthor(authorid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  authorDetails(authorid: number){
    this.router.navigate(['authordetails', authorid]);
  }
}
