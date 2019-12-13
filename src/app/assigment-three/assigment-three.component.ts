import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assigment-three",
  templateUrl: "./assigment-three.component.html",
  styleUrls: ["./assigment-three.component.css"]
})
export class AssigmentThreeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onDisplayMessage() {
    const el = document.querySelector("#Message");
    if ((<HTMLElement>el).style.display === "none") {
      (<HTMLElement>el).style.display = "block";
    } else {
      (<HTMLElement>el).style.display = "none";
    }
    console.log("clicked!");
  }
}
