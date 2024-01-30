import { Component, OnInit } from '@angular/core';

declare global {
  interface Window {
    twttr: any; // Define la propiedad twttr en la ventana global
  }
}

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

export class WidgetsComponent implements OnInit {

  ngOnInit(): void {
    // Cargar el script de widgets de Twitter de forma asíncrona
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    script.async = true;

    // Verificar si el script ya está cargado para evitar duplicados
    if (!window.twttr) {
      document.head.appendChild(script);
    }
  }
}
