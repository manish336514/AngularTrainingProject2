import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-mydemo",
  templateUrl: "./mydemo.component.html",
  styleUrls: ["./mydemo.component.css"]
})
export class MydemoComponent implements OnInit {
  @Input() message;

  constructor() {}

  ngOnInit() {}
}
