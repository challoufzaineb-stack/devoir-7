import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit';
import { Produit } from '../model/produit.model';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './update-produit.html',
  styles: ``
})
export class UpdateProduit implements OnInit {
  currentProduit = new Produit();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

 ngOnInit(): void {
    // Consulter le produit à modifier (Atelier 5 - Q11)[cite: 18]
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).subscribe(prod => {
      this.currentProduit = prod;
    });
  }

 updateProduit() {
    // Enregistrer la modification et rediriger (Atelier 5 - Q13)[cite: 18]
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
      this.router.navigate(['produits']);
    });
  }
}