import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoviesComponent } from "./movies/movies.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [MoviesComponent],
})
export class FeaturesModule {}
