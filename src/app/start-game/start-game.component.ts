import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {

  constructor(
    private router : Router
  ) { }
  startGame():void {
    this.router.navigate(['choose-card'])
  }

  ngOnInit() {
  }

}
