import { Component, Input, OnInit } from '@angular/core';
import { MonsterCard } from './models/monster-card.model';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-yugioh-deck-maker';
  isCardSelected = false;
  cardName = '';
  errorMessage = '';
  showError = false;

  card: MonsterCard = new MonsterCard('', '');
  deck: MonsterCard[] = [];
  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  findByName() {
    this.cardService.getCard(this.cardName).subscribe(
      (data) => {
        const { image_url, image_url_small } = data.data[0].card_images[0];
        this.card = { imageUrl: image_url, imageUrlSmall: image_url_small };
        this.isCardSelected = true;
      },
      (error) => {
        this.errorMessage = 'Invalid Card';
        this.showError = true;
      }
    );
  }
  onRandom() {
    this.cardService.getRandomCard().subscribe(
      (data) => {
        const { image_url, image_url_small } = data.card_images[0];
        this.card = { imageUrl: image_url, imageUrlSmall: image_url_small };
        this.isCardSelected = true;
      },
      (error) => {
        this.errorMessage = 'Invalid Card';
        this.showError = true;
      }
    );
  }

  addCard() {
    try {
      this.card.imageUrl === '' && this.card.imageUrlSmall === ''
        ? console.log('Card invalid')
        : this.deck.push(this.card);
      this.isCardSelected = false;
    } catch (err) {
      this.errorMessage = 'Card not add because is invalid';
      this.showError = true;
    }
  }

  closeCard() {
    this.isCardSelected = false;
  }

  onCloseWindowError() {
    this.showError = false;
  }
}
