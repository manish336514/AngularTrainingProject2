import { Component, OnInit } from "@angular/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { worker } from "cluster";

@Component({
  selector: "app-actorlist",
  templateUrl: "./actorlist.component.html",
  styleUrls: ["./actorlist.component.css"]
})
export class ActorlistComponent implements OnInit {
  actorList;
  selectedIndex: number;
  tempActor;
  constructor() {}

  ngOnInit() {
    this.actorList = [
      {
        name: "Amitabh",
        Rating: 70
      },
      {
        name: "Rajnikant",
        Rating: 70
      }
    ];

    this.selectedIndex = -1;
    this.tempActor = null;
  }

  deleteActor(index: number) {
    this.actorList.splice(index, 1);
  }
  editActor(index: number) {
    this.selectedIndex = index;
    this.tempActor = this.actorList[index];
    //Do not use this
    //shallow copy Problem

    //Solution - DEEP COPY

    //Approach 1(Works But not Recommended)
    // this.tempActor = {
    //   name: this.actorList[index].name,
    //   Rating: this.actorList[index].Rating
    // };

    // Approch 2 (May not Work worker, not Recommended)
    // this.tempActor = Object.assign({}, this.actorList[index]);
    //Solve problem for one level on , embeded object will cause problem
    // Approach 3(Best approch ,Always recommneded)

    this.tempActor = JSON.parse(JSON.stringify(this.actorList[index]));
  }
  saveActor(index: number) {
    this.selectedIndex = -1;
  }
  cancelActor(index: number) {
    this.actorList[index] = this.tempActor;
    this.selectedIndex = -1;
  }
}
