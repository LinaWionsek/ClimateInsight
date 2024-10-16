import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';


import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})



export class AppComponent {
  title = 'ClimateInsight';
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  /**
   * Injects ChangeDetectorRef and MediaMatcher.
   * Creates a MediaQueryList object that checks if the screen width is 768px or less.
   * The matches property of this object indicates whether the condition is currently met.
   * Defines a _mobileQueryListener - tells angular to refresh view.
   * Adds mobileQuery listener - this._mobileQueryListener is executed when mobileQuery changes -> changeDetectorRef.detectChanges()
   */
  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    //creates a MediaQueryList object that checks if the screen width is 600px or less.
    //The matches property of this object indicates whether the condition is currently met.
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    //defination  of _mobileQueryListener - tells angular to refresh view
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    //adds mobileQuery listener  - this._mobileQueryListener is executed when mobileQuery changes -> changeDetectorRef.detectChanges()
  }

  
  /**
   * Called when the component is about to be destroyed.
   * Removes the event listener from the MediaQueryList object.
   * This is necessary to prevent a memory leak.
   */
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
