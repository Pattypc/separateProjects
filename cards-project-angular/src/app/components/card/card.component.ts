
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardData } from '../../models/card.model'; // 1. Importe a interface

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // 2. Crie um único @Input para receber o objeto de dados
  @Input() cardData?: CardData; 
}
