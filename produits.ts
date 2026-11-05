import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, DatePipe, RouterLink],
  templateUrl: './produits.html',
  styleUrl: './produits.css'
})
export class Produits implements OnInit {

 produits: Produit[] = [];

  constructor(private produitService: ProduitService,
              private router: Router) {
    // this.produits = this.produitService.listeProduits();
  }

  ngOnInit(): void {
    this.chargerProduits(); // Chargement des produits via l'API (Atelier 5)
  }

  chargerProduits() {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }

  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      // Appel de l'API REST pour supprimer puis recharger la liste[cite: 17]
      this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
      });
    }
  }
}