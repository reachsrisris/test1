import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'hello-sri',
  templateUrl: './hello-sri.component.html',
  styleUrls: ['./hello-sri.component.css']
})
export class HelloSriComponent implements OnInit {
@Input()
name:string;
  constructor() { }

  ngOnInit() {
  }

}