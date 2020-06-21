import { Component, OnInit } from '@angular/core';
import { Publisher } from '../model/publisher';
import { PublisherService } from '../service/publisher.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-publisher',
  templateUrl: './create-publisher.component.html',
  styleUrls: ['./create-publisher.component.css']
})
export class CreatePublisherComponent implements OnInit {
  publisher: Publisher = new Publisher();
  publisherForm: FormGroup;
  submitted = false;
  publishers: Observable<Publisher[]>;

  constructor(
    private publisherService: PublisherService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.publisherForm = this.formBuilder.group({
      publishername: ['', Validators.required]
    },
    );
    this.reloadData();
  }
  reloadData() {
    this.publishers = this.publisherService.getPublishersList();
  }

  get publisherFormControl() {
    return this.publisherForm.controls;
  }

  newPublisher(): void {
    this.submitted = false;
    this.publisher = new Publisher();
  }

  save() {
    this.publisherService.createPublisher(this.publisher)
      .subscribe(data => console.log(data), error => console.log(error));
    this.publisher = new Publisher();
    this.reloadData();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    if (this.publisherForm.valid) {
      this.save();
    }
  }

  gotoList() {
    this.router.navigate(['/publishers']);
  }
}
