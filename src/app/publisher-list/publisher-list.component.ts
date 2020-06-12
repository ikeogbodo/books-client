import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PublisherService } from '../service/publisher.service';
import { Router } from '@angular/router';

import { Publisher } from '../model/publisher';
import { PublisherDetailsComponent } from '../publisher-details/publisher-details.component';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.css'],
})
export class PublisherListComponent implements OnInit {
  publishers: Observable<Publisher[]>;

  constructor(
    private publisherService: PublisherService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.publishers = this.publisherService.getPublishersList();
  }

  deletePublisher(publisherid: number) {
    this.publisherService.deletePublisher(publisherid).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  publisherDetails(publisherid: number) {
    this.router.navigate(['publisherdetails', publisherid]);
  }
}
