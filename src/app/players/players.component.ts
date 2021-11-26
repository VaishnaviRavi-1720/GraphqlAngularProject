import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { timeStamp } from 'console';
import gql from 'graphql-tag';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

const PLAYER_QUERY = gql`
query players($offset:Int) {
  players(offset:$offser, linit:10) {
    id
    first_name
    last_name
    hand
    birthday
    country
  }
}
`;
export class PlayersComponent implements OnInit  {
    page=1 ;
    players:any[] =[];
    private query :QueryRef<any>;

  constructor(private apollo:Apollo) { }

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query:PLAYER_QUERY,
      variables:{offset:10*this.page}
    });
    this.query.valueChanges.subscribe(result => {
      this.players = result.data && result.data.players;
    });
  }

  update() {
    this.query.refetch({offset:10*this.page});
  }

  nextPage() {
    this.page++;
    this.update() ;
  }

  prevPage() {
    if(this.page>0) this.page --;
    this.update();
  }

}
