import { Component, OnInit } from '@angular/core';
import { Publisher } from '../model/publisher';
import { ActivatedRoute, Router } from '@angular/router';
import { PublisherService } from '../service/publisher.service';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.css']
})
export class PublisherDetailsComponent implements OnInit {

  publisherid: number;
  publisher: Publisher;

  constructor(private route: ActivatedRoute, private router: Router, private publisherService: PublisherService) { }

  ngOnInit() {
    this.publisher = new Publisher();

    this.publisherid = this.route.snapshot.params.publisherid;

    this.publisherService.getPublisher(this.publisherid)
      .subscribe(data => {
        console.log(data);
        this.publisher = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['publishers']);
  }
}
