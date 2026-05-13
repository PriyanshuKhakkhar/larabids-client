import { Component } from '@angular/core';
import { CATEGORIES } from '../../../../core/constants/category-data';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {
  categories = CATEGORIES;
}