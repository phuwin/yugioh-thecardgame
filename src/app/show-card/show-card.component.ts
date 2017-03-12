import { Component, OnInit,trigger, state,style,transition,animate, keyframes,AfterViewInit } from '@angular/core';
import {Observable} from "rxjs/Rx"
@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css'],
  animations: [

    trigger("visibility", [
      state("visible", style({
        opacity:1,
      })),
      state ("hidden", style({
        opacity:0
      })),
      transition("visible => hidden",animate("500ms ease-in")),
      transition("hidden => visible",animate("500ms ease-out"))
    ]),

    trigger("display",[
      state("none",style({display:"none"})),
      state("block",style({display:"block"}))
    ])

  ]
})
export class ShowCardComponent implements AfterViewInit {

  constructor() { }

  trapActivateState:string = "visible"
  trapCardState:string = "hidden"
  trapActivateDisplay:string = "block"

  ngAfterViewInit() {
    Observable.timer(3000).subscribe(()=>{
      this.trapActivateState = "hidden"
    });
    Observable.timer(3500).subscribe(()=>{
      this.trapActivateDisplay = "none"
      this.trapCardState = "visible"
    })
  }



}
