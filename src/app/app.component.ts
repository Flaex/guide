import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  username = "";
  allowNewUser = false;

  onCheckType() {
    if (this.username) {
      this.allowNewUser = true;
    } else if (!this.username) {
      this.allowNewUser = false;
    }
  }

  onUpdateUsername(event: any) {
    this.username = "";
  }
}
 