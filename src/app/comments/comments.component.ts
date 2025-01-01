import { Component, OnInit } from '@angular/core';
import {
  IonIcon, IonButtons, IonTabButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonSelect, IonSelectOption, IonTextarea, IonButton,
  IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonTabButton, ReactiveFormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonSelect, IonSelectOption, IonTextarea, IonButton,
    IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class CommentsComponent implements OnInit {

  flower: string | undefined;

  myForm: FormGroup = new FormGroup({
    difficulty: new FormControl("", Validators.required),
    consejo: new FormControl("", Validators.required)
  });

  constructor(private location: Location, private router: Router, private providerService: ProviderService) {
    addIcons({ arrowBackOutline });
  }
  dataList: any[] = [];
  onSubmit() {
    if (this.flower) {
      this.providerService.createDocument(this.flower, this.myForm.value).then(() => {
        this.myForm.reset()
      });
    }
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { flower: string };
    if (state) {
      this.flower = state.flower;
    }
    this.loadData();
  }
  loadData() {
    if (this.flower) {
      this.providerService.readCollection(this.flower).subscribe((data) => {
        this.dataList = data;
      });
    }
  }

}