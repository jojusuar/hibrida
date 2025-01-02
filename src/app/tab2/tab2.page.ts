import { Component, OnInit } from '@angular/core';
import {
  IonCol, IonRow, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonSelect, IonSelectOption, IonTextarea, IonButton,
  IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProviderService } from '../services/provider.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonCol,IonRow, IonText, ReactiveFormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonSelect, IonSelectOption, IonTextarea, IonButton,
    IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page implements OnInit{

  collectionName = 'feed';
  readonly plants = [
    { title: 'Tulipán', content: 'Los tulipanes pueden ser comestibles y se usaron como sustituto de cebollas durante la Segunda Guerra Mundial.', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimRcc8Z2lHG7cEc7Yb840zUnsNl4yCVJn7A&s' },
    { title: 'Girasol', content: 'Los girasoles pueden girar sus cabezas hacia el sol, un fenómeno llamado heliotropismo.', imageURL: 'https://www.compo.de/dam/jcr:fdbba870-e002-430c-8b2e-c635fcc8074e/sunflower-bee_sonneblume-biene.jpg?x=50&y=50' },
    { title: 'Lavanda', content: 'La lavanda se ha utilizado durante siglos para relajar la mente y mejorar el sueño.', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Single_lavender_flower02.jpg/1200px-Single_lavender_flower02.jpg'},
    { title: 'Diente de León', content: 'Cada parte del diente de león es comestible y tiene propiedades medicinales.', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9egvJCw05_lI2ckqUlfJZj06Uc5phKfsCAg&s'},
    { title: 'Margarita', content: 'Las margaritas simbolizan la pureza y son una de las flores más antiguas conocidas por los humanos.', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ24cGrULQ6IiEatc01OjjbrO3X5nWJ3KC0Q&s' },
    { title: 'Lirio', content: 'Los lirios se consideran un símbolo de devoción y amistad.', imageURL: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/FJJAYVFRYZDYZJP3ZMHZ2EKDFI.jpg'},
    { title: 'Hibisco', content: 'El hibisco es conocido por su uso en tés y bebidas refrescantes.',imageURL: 'https://cdn0.uncomo.com/es/posts/7/0/4/como_cuidar_un_hibisco_45407_orig.jpg' },
    { title: 'Loto', content: 'El loto simboliza la pureza y la iluminación en muchas culturas asiáticas.', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8FOjaHtbRyeyWMvRCXgBNCEL1OrZvPlU-w&s' },
    { title: 'Orquídeas', content: 'Hay más de 25,000 especies de orquídeas en todo el mundo.', imageURL: 'https://www.floresyplantas.net/wp-content/uploads/flor-de-phalaenopsis.jpg' },
    { title: 'Rosa', content: 'La rosa es un símbolo universal de amor y se cultiva desde hace más de 5,000 años.', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrpSiNQbx5dizG14dSH-C6IBW4GGDZgyLlQ&s'},
    { title: 'Gardenia', content: 'Las gardenias representan la dulzura y la gratitud en el lenguaje de las flores.', imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Starr_030523-0050_Gardenia_brighamii.jpg/1200px-Starr_030523-0050_Gardenia_brighamii.jpg'},
    { title: 'Susana Ojos Negros', content: 'Estas flores son conocidas por su color amarillo brillante y su centro oscuro.', imageURL: 'https://fichas.infojardin.com/foto-trepadoras/thunbergia-alata-flores.jpg' },
    { title: 'Amapola', content: 'Las amapolas son un símbolo de recuerdo para los caídos en la guerra.', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrbuySc6OvN2AEKfp-6V4jylwIL9m2wvORg&s'},
    { title: 'Clavel', content: 'El clavel es la flor nacional de España y un símbolo de pasión y admiración.', imageURL: 'https://media.admagazine.com/photos/6549e2ca54005d4eddd0ac31/16:9/w_2560%2Cc_limit/clavel-del-poeta.jpg' },
    { title: 'Narciso', content: 'Los narcisos son un símbolo de renacimiento y nuevos comienzos.', imageURL: 'https://estaticos-cdn.prensaiberica.es/clip/93d723f3-0368-41f3-ae39-5f335fd48e39_source-aspect-ratio_default_0.jpg' },
  ];
  
  /* Inyecte la dependencia a Firestore */
  constructor(private providerService: ProviderService) { }

  dataList: any[] = [];
  

  ngOnInit() {
    this.plants.forEach((plant) => {
      const plantData = {
        title: plant.title,
        content: plant.content,
        imageURL: plant.imageURL,
      };
      // this.providerService.createDocument(plant.title, plantData);
      this.dataList.push(plantData);
    })
    
    this.loadData();
  }

  loadData() {
    // this.providerService.readCollection(this.collectionName).subscribe((data) => {
    //   this.dataList = data;
    // });

  }
}
