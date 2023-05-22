import { Injectable, EventEmitter } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUpdated: EventEmitter<string> = new EventEmitter<string>();
  private getProducts = axios.get(``)
}
