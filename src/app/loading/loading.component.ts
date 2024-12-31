import { Component } from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner'; 
import { LoadingService } from '../services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone: true,
  imports: [MatProgressSpinner, CommonModule]
})
export class LoadingComponent {
  isLoading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {}
}
