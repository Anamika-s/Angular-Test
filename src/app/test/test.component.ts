import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 msg: string="hello";
  constructor() { }
  sum(n1 : number , n2 : number)
  {
    return n1+n2;
  }
  private test1()
  {
    return "1";
  }
  ngOnInit(): void {
  }

}
