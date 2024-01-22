import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travelspace';
  selectedfile !:File
  onUplod(eve:any){
    this.selectedfile = eve.target.files[0]
    console.log(this.selectedfile);
  }
  submit(e:any){
console.log(e);

  }
}
