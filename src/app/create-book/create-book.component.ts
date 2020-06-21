import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../service/book.service';
import { Book } from '../model/book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book();
  bookForm: FormGroup;
  submitted = false;
  books: Observable<Book[]>;

  constructor(
    private bookService: BookService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      authorid: ['', Validators.required],
      publisherid: ['', Validators.required],
      publisheddate: ['', Validators.required],
      pages: ['', Validators.required],
    },
    );
    this.reloadData();
  }
  reloadData() {
    this.books = this.bookService.getBooksList();
  }

  get bookFormControl() {
    return this.bookForm.controls;
  }

  newAuthor(): void {
    this.submitted = false;
    this.book = new Book();
  }

  save() {
    this.bookService.createBook(this.book)
      .subscribe(data => console.log(data), error => console.log(error));
    this.book = new Book();
    this.reloadData();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    if (this.bookForm.valid) {
      this.save();
    }
  }

  gotoList() {
    this.router.navigate(['/books']);
  }
}
