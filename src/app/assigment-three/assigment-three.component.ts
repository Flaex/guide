import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment-three',
  templateUrl: './assigment-three.component.html',
  styleUrls: ['./assigment-three.component.css']
})
export class AssigmentThreeComponent implements OnInit {

  paragraphVisible = false;
  
  constructor() { }

  ngOnInit() {
  }

  onDisplayMessage() {
    this.paragraphVisible = true;
    const el = document.querySelector('#Message');
    console.log('clicked!');
    
  }
}
