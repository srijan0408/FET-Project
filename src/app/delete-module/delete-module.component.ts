import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-module',
  templateUrl: './delete-module.component.html',
  styleUrls: ['./delete-module.component.css']
})
export class DeleteModuleComponent implements OnInit{
  constructor(private api:ApiserviceService){}
  ngOnInit(): void {   
  }
  input:any;
  datainfo:any;
  getdata(){
    this.api.getdata(this.input).subscribe((res)=>{
      this.datainfo = res.data;
      console.log(this.datainfo)
    })
  }
  deletedata(){
    this.api.deleteData(this.input).subscribe((res)=>{
      console.log("Data Deleted")
    })
  }
}
