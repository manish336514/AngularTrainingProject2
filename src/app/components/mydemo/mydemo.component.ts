import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-mydemo",
  templateUrl: "./mydemo.component.html",
  styleUrls: ["./mydemo.component.css"]
})
export class MydemoComponent implements OnInit {
  @Input() message;
  testFlag: boolean;
  bthText = "Hide Text";
  blockNumber: number;

  constructor() {}

  ngOnInit() {
    this.testFlag = true;
    this.blockNumber = 300;
  }

  toggleText() {
    this.testFlag = !this.testFlag;
    this.bthText = "Show Text";
  }

  setBlockNumber(block: number) {
    this.blockNumber = block;
  }
}
