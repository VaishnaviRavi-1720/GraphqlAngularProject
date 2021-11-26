import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlComponent } from './graphql.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GraphqlComponent]
})
export class GraphqlModule {

uri:string ="http://localhost:4201/graphql";
}
