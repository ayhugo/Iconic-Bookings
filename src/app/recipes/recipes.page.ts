import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    console.log('ngOnIt');
  }

  ionViewWillEnter() {
    console.log('willenter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log('didentger');
  }

  ionViewWillLeave() {
    console.log('eilleave');
  }

  ionViewDidlLeave() {
    console.log('didleave');
  }

  ngOnDestroy(){

  }
}
