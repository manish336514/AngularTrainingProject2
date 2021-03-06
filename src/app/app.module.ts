import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ActorlistComponent } from "./components/actorlist/actorlist.component";
import { MydemoComponent } from "./components/mydemo/mydemo.component";

@NgModule({
  declarations: [AppComponent, ActorlistComponent, MydemoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
