import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IRequestMonsterCard,
  IRequestRandomMonster,
  MonsterCard,
} from '../models/monster-card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  private randomCardUrl = 'https://db.ygoprodeck.com/api/v7/randomcard.php';
  constructor(private http: HttpClient) {}

  getCard(name: string) {
    return this.http.get<IRequestMonsterCard>(this.url, { params: { name } });
  }

  getRandomCard() {
    return this.http.get<IRequestRandomMonster>(this.randomCardUrl);
  }
}
