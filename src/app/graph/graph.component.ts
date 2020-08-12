import { Component, OnInit } from '@angular/core';
import { WorldalltimeService } from '../services/worldalltime.service';
import { ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner"; 
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  Data:Object[];
  constructor(private was:WorldalltimeService,private SpinnerService:NgxSpinnerService,private cd:ChangeDetectorRef) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
    
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartColors:Array<any> = [{
    backgroundColor: 'red'
 }];
 loaded:boolean=false;
  ngOnInit(): void {
    this.was.getdailydata().subscribe(res => {this.Data=(res.json());});
  }
  
  getLabels(){
    var list=[];
      for (let index = 0; index < Object.keys(this.Data).length; index++) {
        var element = this.Data[index]['reportDate'];
        list.push(element);
      }
     
    return list;
    
  }
  public load:boolean=false;
  public list:any[];
  getData(){
    if(!this.load){
      this.list=[];
      var data1=[]
      for (let index = 0; index < Object.keys(this.Data).length; index++) {
        var element = this.Data[index]['deltaConfirmed'];
        data1.push(element);
      }
      this.list.push({data: data1,label:'Confirmed'});
      this.load=true;
    }
    this.loaded=true;
    this.cd.markForCheck();
    return this.list;

  }
}
