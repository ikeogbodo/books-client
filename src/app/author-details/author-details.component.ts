import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  authorid: number;
  author: Author;

  constructor(private route: ActivatedRoute, private router: Router, private authorService: AuthorService) { }

  ngOnInit() {
    this.author = new Author();

    this.authorid = this.route.snapshot.params.authorid;

    this.authorService.getAuthor(this.authorid)
      .subscribe(data => {
        console.log(data);
        this.author = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['authors']);
  }
}
