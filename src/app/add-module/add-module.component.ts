import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {
  // userform !: FormGroup
  constructor(private api:ApiserviceService){}
  ngOnInit(): void {  
  }
  userform = new FormGroup({
      'pid': new FormControl(''),
      'name': new FormControl(''),
      'gender' : new FormControl(''),
      'age' : new FormControl(''),
      'crime' : new FormControl(''),
      'jdate' : new FormControl(''),
      'rdate' : new FormControl('')
  })
  usersubmit(){
    console.log(this.userform.value);
    this.api.addData(this.userform.value).subscribe((res)=>{
      console.log(res,'Data Added in Database')
    })
  }
}
