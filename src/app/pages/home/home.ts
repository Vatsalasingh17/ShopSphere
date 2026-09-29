import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',// what html tag will used to represent the component
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
