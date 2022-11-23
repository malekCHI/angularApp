import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/Emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  listeEmploi!: Emploi[]
  nbr!: number
  searchText!: string

  constructor() { }

  ngOnInit(): void {

    this.listeEmploi = [{ reference: '101', titre: 'test1', entreprise: 'esprit', etat: true },
    { reference: '102', titre: 'test2', entreprise: 'Actia', etat: false },{ reference: '103', titre: 'test3', entreprise: 'SASAME', etat: true }];
  }

  Bilan() {
    this.nbr = 0;
    for (let i = 0; i < this.listeEmploi.length; i++){
      if (this.listeEmploi[i].etat === true)
        this.nbr++;
   }
  }

  Search() {
    //x lehna hye variable compteur 
    //match kima == 
    this.listeEmploi = this.listeEmploi.filter((x)=>(x.entreprise.match(this.searchText)||x.reference.match(this.searchText)))
  }



}
