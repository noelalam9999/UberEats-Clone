import { Component, Input } from '@angular/core';
import { Restaurant } from '../../../../shared/models/restaurant.model';

@Component({
  selector: 'app-items-by-category',
  templateUrl: './items-by-category.component.html',
  styleUrl: './items-by-category.component.scss'
})
export class ItemsByCategoryComponent {

  items: Restaurant[] = [
    {
      _id: '1',
      name: 'Pizza',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '2',
      name: 'Pasta',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '3',
      name: 'Dessert',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '4',
      name: 'Chicken',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '5',
      name: 'Chicken',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '6',
      name: 'Chicken',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '7',
      name: 'Chicken',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    }
  ];

  handleItemClick(restaurant: Restaurant) {

  }

  @Input() category!: {title: string};

}
