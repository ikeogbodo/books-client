import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author';
import { AuthorService } from '../service/author.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
  author: Author = new Author();
  authorForm: FormGroup;
  submitted = false;
  authors: Observable<Author[]>;

  constructor(
    private authorService: AuthorService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      authorname: ['', Validators.required]
    },
    );
    this.reloadData();
  }
  reloadData() {
    this.authors = this.authorService.getAuthorsList();
  }

  get authorFormControl() {
    return this.authorForm.controls;
  }

  newAuthor(): void {
    this.submitted = false;
    this.author = new Author();
  }

  save() {
    this.authorService.createAuthor(this.author)
      .subscribe(data => console.log(data), error => console.log(error));
    this.author = new Author();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    if (this.authorForm.valid) {
      this.save();
    }
  }

  gotoList() {
    this.reloadData();
    this.router.navigate(['/authors']);
  }
}
