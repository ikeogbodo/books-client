import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdatePublisherComponent } from './update-publisher/update-publisher.component';
import { CreatePublisherComponent } from './create-publisher/create-publisher.component';
import { PublisherListComponent } from './publisher-list/publisher-list.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
// import {MaterialModule} from '@angular/material';
// import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    BookDetailsComponent,
    UpdateBookComponent,
    BookListComponent,
    AuthorListComponent,
    CreateAuthorComponent,
    AuthorDetailsComponent,
    UpdateAuthorComponent,
    UpdatePublisherComponent,
    CreatePublisherComponent,
    PublisherListComponent,
    PublisherDetailsComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    FooterComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
