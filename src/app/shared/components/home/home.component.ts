import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../service/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allData =JSON.parse(localStorage.getItem("dataArray")!)
  constructor() { }

  ngOnInit(): void {
    console.log(this.allData);

    
   
    
  }

}
