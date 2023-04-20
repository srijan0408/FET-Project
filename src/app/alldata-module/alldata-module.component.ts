import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-alldata-module',
  templateUrl: './alldata-module.component.html',
  styleUrls: ['./alldata-module.component.css']
})
export class AlldataModuleComponent implements OnInit {
  constructor(private api1: ApiserviceService) { }
  pinfo: any;
  ngOnInit(): void {
    this.api1.getAllUser().subscribe((res) => {
      console.log(res)
      this.pinfo = res.data;
    })
  }

}
