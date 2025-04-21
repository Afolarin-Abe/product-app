import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
    
    // Hardcoded data
   items : ProductItem[] = [
      new ProductItem(1,'Saxophone',1500,
        `The saxophone is a type of single-reed woodwind instrument with a conical body, usually made of brass. 
        As with all single-reed instruments, sound is produced when a reed on a mouthpiece vibrates to produce 
        a sound wave inside the instrument's body.`,
      `https://m.media-amazon.com/images/I/61LkxFINtHL.jpg`),
      new ProductItem(2,'Guitar',500,
        `The guitar is a stringed musical instrument that is usually fretted and 
        typically has six or twelve strings.`,
      `https://vintageguitarsrus.com/cdn/shop/products/V130VSB_3_4764d80c-0883-4505-a046-c03f60edd5e8.jpg?v=1643976842`),
      new ProductItem(3,'Flute',300,
        `The flute is a member of a family of musical instruments in the woodwind 
        group. Like all woodwinds, flutes are aerophones, producing sound with a 
        vibrating column of air. Flutes produce sound when the player's air flows across an opening`,
      `https://r2.gear4music.com/media/86/869300/600/preview.jpg`),
      new ProductItem(4,'Piano',5000,
        `A piano is a keyboard instrument that produces sound when its keys are depressed, activating 
        an action mechanism where hammers strike strings. Modern pianos have a row of 88 black and 
        white keys, tuned to a chromatic scale in equal temperament.`,
      `https://pianopiano.com/wp-content/uploads/2018/12/yamaha-5-7-grand-piano-1.jpg`),
      new ProductItem(5,'Clarinet',400,
        `The clarinet is a single-reed musical instrument in the woodwind family, with a nearly cylindrical 
        bore and a flared bell. Clarinets comprise a family of instruments of differing sizes and pitches.`,
      `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4k8iDbCZPN5OB0dE29jgvbY216GtP_y3OBQ&s`),
      new ProductItem(6,'Trumpet',400,
        `The trumpet is a brass instrument commonly used in classical and jazz ensembles. The trumpet group 
        ranges from the piccolo trumpet—with the highest register in the brass family.`,
      `https://r2.gear4music.com/media/72/725273/600/preview.jpg`),
      new ProductItem(7,'Violin',700,
        `The violin, sometimes referred to as a fiddle, is a wooden chordophone, and is the smallest, and
         thus highest-pitched instrument in regular use in the violin family. Smaller violin-type instruments exist, 
         including the violino piccolo and the pochette, but these are virtually unused.`,
        `https://bertrandsmusicrentals.com/images/product/large/ae00-2219.jpg`),
      new ProductItem(8,'Guitar',1000,
        `A drum kit is a collection of drums, cymbals, and sometimes other auxiliary percussion instruments set up 
        to be played by one person.`,
        `https://media.sweetwater.com/api/i/q-82__ha-f6193dcd55954345__hmac-6ee8603fd4ab7444185c8349ec6a71a685cc62ab/images/items/750/RS525SC-WR-large.jpg`)
  ];
  

  getAllProducts(): Observable<ProductItem[]>{
    // return this.http.get('/assets/mockData/products.json');
    return of(this.items);
  }
  
  
  getProductById(id: number): Observable<ProductItem | undefined> {
    return of(this.items.find(p => p.id === id));
  }

  /** Does not reach this folder */  
  // getProducts(){
  //   return this.http.get('/assets/mockData/products.json');
  // }


}
