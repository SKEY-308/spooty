import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from 'src/assets/mockdata/albums';


// import albums from '../../assets/mockdata/albums/index';
import bornToDie from '../../assets/mockdata/albums/bornToDie.json';
import comeAroundSundown from '../../assets/mockdata/albums/comeAroundSundown.json';
import exRe from '../../assets/mockdata/albums/exRe.json';
import extraordinaryMachine from '../../assets/mockdata/albums/extraordinaryMachine.json';
import manOnTheMoon2 from '../../assets/mockdata/albums/manOnTheMoon2.json';
import seaOfCowards from '../../assets/mockdata/albums/seaOfCowards.json';
import swimming from '../../assets/mockdata/albums/swimming.json';
import whenWeAllFallAsleep from '../../assets/mockdata/albums/whenWeAllFallAsleep.json';
import wishYouWereHere from '../../assets/mockdata/albums/wishYouWereHere.json';


@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  data: any = [
    {
      title: 'Born To Die',
      albums: bornToDie
    },
    {
      title: 'Come Around Sundown',
      albums: comeAroundSundown
    },
    {
      title: 'Ex:Re',
      albums: exRe
    },
    {
      title: 'Extraordinary Machine',
      albums: extraordinaryMachine
    },
    {
      title: 'Man On The Moon II: The Legend of Mr. Rager',
      albums: manOnTheMoon2
    },
    {
      title: 'Sea Of Cowards',
      albums: seaOfCowards
    },
    {
      title: 'Swimming',
      albums: swimming
    },
    {
      title: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',
      albums: whenWeAllFallAsleep
    },
    {
      title: 'Wish You Were Here',
      albums: wishYouWereHere
    }
  ]

  songId: number = 0

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const title: any = this.activatedRoute.snapshot.paramMap.get('title');
    this.songId = title
    console.log(this.songId)
    console.log(this.data)
    console.log(this.data[this.songId].albums.tracks)
  }

    // Helper function for image names
    dasherize(string: string) {
      return string.replace(/[A-Z]/g,
      function(char, index) {
        return (index !== 0 ? '-' : '') + char.toLowerCase();
      });
    };

}
