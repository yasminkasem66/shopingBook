import { Injectable } from '@angular/core';
import { Recipes } from '../models/recipes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, ServicesUrls } from '../ServiceUrl';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 
  constructor(private httpClient:HttpClient) { }

  getRecipes(): Observable<Recipes[]>{
    const API_LINK=`${API_URL}${ServicesUrls.GET_RECIPES}`
    return  this.httpClient.get<Recipes[]>(API_LINK);
  }
}
