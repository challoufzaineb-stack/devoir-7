import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.html',
  styleUrl: './add-produit.css',
})
export class AddProduit implements OnInit {
  newProduit = new Produit();

  constructor(
    private produitService: ProduitService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  addProduit() {
    // Atelier 5 - Q6 : Soumission asynchrone REST et redirection
    this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
      console.log(prod);
      this.router.navigate(['produits']);
    });
  }

}