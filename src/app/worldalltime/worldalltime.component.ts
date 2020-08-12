import { Component, OnInit } from '@angular/core';
import {WorldalltimeService} from '../services/worldalltime.service';
import { NgxSpinnerService } from "ngx-spinner"; 
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-worldalltime',
  templateUrl: './worldalltime.component.html',
  styleUrls: ['./worldalltime.component.scss']
})
export class WorldalltimeComponent implements OnInit {
  
  Data: JSON;
  loaded: boolean=false;
  
  constructor(private was:WorldalltimeService, private SpinnerService:NgxSpinnerService,private cd:ChangeDetectorRef) { }
  
  ngOnInit(): void {
    this.was.getalltimedata().subscribe(res => {
      this.Data=(res.json());
    });
  }
  

  public getwaconfirmed():String{
    return parseInt(this.Data['confirmed']['value']).toLocaleString('en', {useGrouping:true});    
  }
  public getwarecovered():String{
    return parseInt(this.Data['recovered']['value']).toLocaleString('en', {useGrouping:true});   
  }
  public getwadeaths():String{
    this.loaded=true;
    this.cd.markForCheck();
    return parseInt(this.Data['deaths']['value']).toLocaleString('en', {useGrouping:true});   
  }

}
