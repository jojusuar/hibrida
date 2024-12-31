import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonCard, IonCardContent, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { TeachablemachineService } from '../services/teachablemachine.service';
import { PercentPipe } from '@angular/common';
import { LoadingService } from '../services/loading.service';
import { LoadingComponent } from '../loading/loading.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [PercentPipe, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonFab, IonFabButton, IonIcon, IonCard, LoadingComponent, RouterOutlet],
})
export class Tab1Page {
  @ViewChild('image', { static: false }) imageElement!: ElementRef<HTMLImageElement>;

  imageReady = signal(false);
  imageUrl = signal("");
  modelLoaded = signal(false);
  classLabels: string[] = [];
  predictions: any[] = [];

  constructor(private teachablemachine: TeachablemachineService, private loadingService: LoadingService) {
    addIcons({ cameraOutline });
  }

  async ngOnInit() {
    await this.teachablemachine.loadModel()
    this.classLabels = this.teachablemachine.getClassLabels()
    this.modelLoaded.set(true)
  }

  requestPrediction() {
    this.loadingService.show();
    setTimeout(() => {
      this.predict();            // Perform the prediction after the UI update
    }, 0);   
  }

  async predict() {
    try {
      const image = this.imageElement.nativeElement;
      this.predictions = await this.teachablemachine.predict(image);
    } catch (error) {
      console.error(error);
      alert('Error al realizar la predicción.');
    }
    finally {
      this.loadingService.hide();
    }
  }

  async openCamera(): Promise<void> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        saveToGallery: false,
      });
      if (image) {
        this.imageUrl.set(image.dataUrl ? image.dataUrl : "");
        this.imageReady.set(true);
      }
    } catch (error) {
      console.error('Camera error:', error);
    }
  }
}
