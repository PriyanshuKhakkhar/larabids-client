import { Component } from '@angular/core';
import { CATEGORIES } from '../../../../core/constants/category-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {
  categories = CATEGORIES;
}