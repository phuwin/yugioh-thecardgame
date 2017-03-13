import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router"

@Component({
  selector: 'app-choose-card',
  templateUrl: './choose-card.component.html',
  styleUrls: ['./choose-card.component.css']
})
export class ChooseCardComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  card:Object = {
    url:"assets/card.jpg"
  }
  ngOnInit() {
  }
  onCardPick(index:number):void {
    this.router.navigate(['certainty', index])
  }

}
