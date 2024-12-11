import { Injectable, inject } from '@angular/core';

/* Importe los módulos de AngularFire */
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  firestoreService = inject(Firestore);
  constructor() { }
  createDocument(collectionName: string, data: any): Promise<any> {
    const colRef = collection(this.firestoreService, collectionName);
    return addDoc(colRef, data);
  }

  readCollection(collectionName: string): Observable<any[]> {
    const colRef = collection(this.firestoreService, collectionName);
    return collectionData(colRef, { idField: 'id' });
}
}
