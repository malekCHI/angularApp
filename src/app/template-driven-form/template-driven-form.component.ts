import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Driven } from '../core/Driven';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  driven!: Driven;
  IsCodeValid!: false;

  constructor() { }

  ngOnInit(): void {
    this.driven = new Driven();
    
  }
  Ajouter(f:NgForm) {
    console.log(this.driven);
  }
  


}
