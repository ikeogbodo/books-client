import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { PublisherListComponent } from './publisher-list/publisher-list.component';
import { CreatePublisherComponent } from './create-publisher/create-publisher.component';
import { UpdatePublisherComponent } from './update-publisher/update-publisher.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'add', component: CreateBookComponent },
  { path: 'update/:bookid', component: UpdateBookComponent },
  { path: 'details/:bookid', component: BookDetailsComponent },
  { path: '', redirectTo: 'author', pathMatch: 'full' },
  { path: 'authors', component: AuthorListComponent },
  { path: 'addauthor', component: CreateAuthorComponent },
  { path: 'updateauthor/:authorid', component: UpdateAuthorComponent },
  { path: 'authordetails/:authorid', component: AuthorDetailsComponent },
  { path: '', redirectTo: 'publisher', pathMatch: 'full' },
  { path: 'publishers', component: PublisherListComponent },
  { path: 'addpublisher', component: CreatePublisherComponent },
  { path: 'updatepublisher/:publisherid', component: UpdatePublisherComponent },
  { path: 'publisherdetails/:publisherid', component: PublisherDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
