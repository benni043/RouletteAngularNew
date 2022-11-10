import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  fieldFlex1Nums: string[] = ["3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"];
  fieldFlex2Nums: string[] = ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"];
  fieldFlex3Nums: string[] = ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"];

  fieldFlex1NumsBools: boolean[] = [true, false, true, true, false, true, true, false, true, true, false, true];
  fieldFlex2NumsBools: boolean[] = [false, true, false, false, true, false, false, true, false, false, true, false];
  fieldFlex3NumsBools: boolean[] = [true, false, true, false, false, true, true, false, true, false, false, true];

  fieldFlex4Nums: string[] = ["1st 12", "2nd 12", "3rd 12"];
  fieldFlex5Nums: string[] = ["1-18", "EVEN", "RED", "BLACK", "ODD", "19-36"];

  ngOnInit(): void {
  }

}
