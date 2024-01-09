import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DatabaseService } from '../../service/database.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iobj } from '../../model/model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm!:FormGroup;
 id =null
  constructor( private _database:DatabaseService,
              private _router : Router,
               private acti :ActivatedRoute) { }

  ngOnInit(): void {
    this.adddata();
    this.id = this.acti.snapshot.params['id']
    
  }

  adddata(){
    this.addForm = new FormGroup({
      state : new FormControl(null,Validators.required),
      name : new FormControl(null,Validators.required),
      city : new FormControl(null,Validators.required),
      details : new FormControl(null,Validators.required),
      image : new FormControl(null,Validators.required),


    })
  }

  onAddDaata(){
    this.addForm.value;
    let obj :Iobj= {
      state  : this.addForm.value.state,
      name :this.addForm.value.name,
      city :this.addForm.value.city,
      details :this.addForm.value.details,
      image :this.addForm.value.image
    };
    this.addForm.reset()
  this._database.getPostData(obj).subscribe(res=>console.log(res)
  )
    this._router.navigate(['home'])
  }

  onUpdate(){
    
  }

}
