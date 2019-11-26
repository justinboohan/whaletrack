import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-whale',
  templateUrl: './whale.page.html',
  styleUrls: ['./whale.page.scss'],
})
export class WhalePage implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID');
    console.log(this.id);
  }
}
