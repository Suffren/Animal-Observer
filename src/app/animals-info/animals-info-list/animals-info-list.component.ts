import { Component, OnInit } from '@angular/core';
import { Mammals } from '../../../assets/mammals';

@Component({
  selector: 'app-animals-info-list',
  templateUrl: './animals-info-list.component.html',
  styleUrls: ['./animals-info-list.component.scss']
})
export class AnimalsInfoListComponent implements OnInit {
  animals = Mammals;
  currentUrlParam: string;

  constructor() { }

  ngOnInit(): void { }
}