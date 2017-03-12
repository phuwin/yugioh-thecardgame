import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-certainty',
  templateUrl: './certainty.component.html',
  styleUrls: ['./certainty.component.css']
})
export class CertaintyComponent implements OnInit {
  card:number;
  constructor(
    private router:ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      this.card = Number(params['index'])+1
    })
  }

}
