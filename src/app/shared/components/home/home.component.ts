import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../service/database.service';
import { Iobj } from '../../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allData :Array<Iobj> = []
  constructor(private _database:DatabaseService) { }

  ngOnInit(): void {
    
    this._database.getAlldata().subscribe(res=>this.allData=res)
    console.log(this.allData);
   
   
    
  }



}
