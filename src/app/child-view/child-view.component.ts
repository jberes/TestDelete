import { Component, OnInit } from '@angular/core';
import { DataSource1Service } from '../services/data-source1.service';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit {
  public dataSource1Table1: any = null;

  constructor(
    private dataSource1Service: DataSource1Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource1Service.getTable1().subscribe(data => this.dataSource1Table1 = data);
  }
}
