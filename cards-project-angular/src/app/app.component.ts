import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { CardData } from './models/card.model'; // 1. Importe a interface

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cards-project-angular';

  // 2. Crie objetos que seguem a estrutura da interface
  card1: CardData = {
    headerText: 'Card Dinâmico 1000',
    headerColor: '#a7d7c5',
    headerIconSrc: 'assets/icons/icon-hand.png'
  };

  card2: CardData = {
    headerText: 'Outro Card',
    headerColor: '#f7cac9',
    headerIconSrc: 'assets/icons/icon-credit-card.png'
  };
}
