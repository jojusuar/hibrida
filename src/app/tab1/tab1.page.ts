import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { cloudUploadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonFab, IonFabButton, IonIcon, IonCard],
})
export class Tab1Page {

  imageReady = signal(false)
  imageUrl = signal("")

  constructor() {
    addIcons({ cloudUploadOutline });
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const reader = new FileReader();

      reader.onload = () => {
        this.imageUrl.set(reader.result as string)
        this.imageReady.set(true)
      };

      reader.readAsDataURL(file);
    }
  }
}
