import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  card: any[] = [
    {
      title: "pepe",
      subtitle: "perez",
      image: "jasjjaja"
    },{
      title: "pep2e",
      subtitle: "perez",
      image: "jasjjaja"
    },
    {
      title: "pep3e",
      subtitle: "perez",
      image: "jasjjaja"
    },{
      title: "pep4",
      subtitle: "perez",
      image: "jasjjaja"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
