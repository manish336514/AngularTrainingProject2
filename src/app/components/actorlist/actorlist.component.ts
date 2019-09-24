import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-actorlist",
  templateUrl: "./actorlist.component.html",
  styleUrls: ["./actorlist.component.css"]
})
export class ActorlistComponent implements OnInit {
  actorList;
  constructor() {}

  ngOnInit() {
    this.actorList = [
      {
        name: "Rajnokant",
        Rating: 10
      },
      {
        name: "Rajnokant",
        Rating: 10
      }
    ];
  }

  deleteActor(index) {
    this.actorList.splice(index, 1);
  }
}
