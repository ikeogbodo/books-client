import { Component, OnInit } from '@angular/core';
import { Publisher } from '../model/publisher';
import { PublisherService } from '../service/publisher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-publisher',
  templateUrl: './create-publisher.component.html',
  styleUrls: ['./create-publisher.component.css']
})
export class CreatePublisherComponent implements OnInit {
  publisher: Publisher = new Publisher();
  submitted = false;

  constructor(private publisherService: PublisherService, private router: Router) { }

  ngOnInit() {
  }

  newPublisher(): void {
    this.submitted = false;
    this.publisher = new Publisher();
  }

  save() {
    this.publisherService.createPublisher(this.publisher)
      .subscribe(data => console.log(data), error => console.log(error));
    this.publisher = new Publisher();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/publishers']);
  }
}
