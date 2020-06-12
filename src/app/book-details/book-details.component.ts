import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../model/book';
import { BookService } from '../service/book.service';
import { BookListComponent } from '../book-list/book-list.component';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookid: number;
  book: Book;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.book = new Book();

    this.bookid = this.route.snapshot.params.bookid;

    this.bookService.getBook(this.bookid)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['books']);
  }
}
