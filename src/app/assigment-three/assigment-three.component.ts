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
    const clickCount = document.querySelector("#ClickCount");

    if ((<HTMLElement>msgContainer).style.display === "none") {
      (<HTMLElement>msgContainer).style.display = "block";
    } else {
      (<HTMLElement>msgContainer).style.display = "none";
    }

    this.click++;
    this.clickArray.push(this.click);

    if (this.clickArray.length <= 4) {
      clickCount.insertAdjacentHTML(
        "beforeend",
        `<div style="color:gray">${this.click}</div>`
      );
    } else {
      clickCount.insertAdjacentHTML(
        "beforeend",
        `<div style="color:green">${this.click}</div>`
      );
    }
    
    console.log(this.clickArray);
  }
}
