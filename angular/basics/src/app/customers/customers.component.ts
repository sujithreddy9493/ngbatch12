import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  data=[
      {
        name:"suji"
      },
      {
        name:"sree"
      },
      {
        name:"nani"
      }
  ]

  constructor() { }

  ngOnInit() {
  }
  sharedDataFromChild(data){
    console.log('data', data);
  }

}
