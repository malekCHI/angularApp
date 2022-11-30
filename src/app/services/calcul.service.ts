import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  getNumberOf(list: any[], criteria: string, value: any) {
    //hadhy v.criteria nefsha v[criteria] ame hna criteria naarfhech chnye est ce que completed wale title wale chnye ake aaleh hatineha f crochee
    return list.filter((v)=> v[criteria] == value).length
  }
}
