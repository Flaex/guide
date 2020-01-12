import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assigment-three",
  templateUrl: "./assigment-three.component.html",
  styleUrls: ["./assigment-three.component.css"]
})
export class AssigmentThreeComponent implements OnInit {
  click = 0;
  clickArray = [];

  constructor() {}

  ngOnInit() {}

  onDisplayMessage() {
    const msgContainer = document.querySelector("#Message");

    if ((<HTMLElement>msgContainer).style.display === "none") {
      (<HTMLElement>msgContainer).style.display = "block";
    } else {
      (<HTMLElement>msgContainer).style.display = "none";
    }

    this.click++;
    this.clickArray.push(this.click);

    console.log(this.clickArray);
  }

  getColor(i) {
    return this.clickArray[i - 1] >= 5 ? "blue" : "none";
  }
}
