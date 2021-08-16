import { Component, OnInit } from '@angular/core';

export interface Club {
  name: string;
  classification: string;
  typeOfClub: string;
  accountNumber?: string | null;
  acronym: string;
  inactive: boolean;
  timestamp: string
}

const CLUBS: Club[] = [
  {
    "name": "2021 Class Board",
    "classification": "Classless",
    "typeOfClub": "Classless",
    "accountNumber": "335-AG",
    "acronym": "CB 2021",
    "inactive": false,
    "timestamp": "2019-11-07 18:22:12"
  },
  {
    "name": "2022 Class Board",
    "classification": "Classless",
    "typeOfClub": "Classless",
    "accountNumber": "356-AG",
    "acronym": "CB 2022",
    "inactive": false,
    "timestamp": "2019-11-07 18:22:25"
  },
  {
    "name": "2023 Class Board",
    "classification": "Classless",
    "typeOfClub": "Classless",
    "accountNumber": "415-AG",
    "acronym": "CB 2023",
    "inactive": false,
    "timestamp": "2019-11-07 18:22:34"
  },
  {
    "name": "2024 Class Board",
    "classification": "Classless",
    "typeOfClub": "Classless",
    "accountNumber": null,
    "acronym": "CB 2024",
    "inactive": false,
    "timestamp": "2019-12-05 20:12:56"
  },
  {
    "name": "ACCESS - Students advocating for campus and educational accessibility",
    "classification": "Class 1 - Special Interest",
    "typeOfClub": "Societal Awareness",
    "accountNumber": "101-AG",
    "acronym": "ACCESS",
    "inactive": false,
    "timestamp": "2019-10-24 00:17:43"
  },
  {
    "name": "Active Minds",
    "classification": "Class 1 - Special Interest",
    "typeOfClub": "Societal Awareness",
    "accountNumber": "223-AG",
    "acronym": "Active Minds",
    "inactive": false,
    "timestamp": "2019-10-24 00:17:43"
  },
  {
    "name": "Actuarial Math Club",
    "classification": "Class 1 - Special Interest",
    "typeOfClub": "STEM Focused",
    "accountNumber": "103-AG",
    "acronym": "Actuarial Math Club",
    "inactive": false,
    "timestamp": "2019-10-24 00:17:43"
  },
  {
    "name": "African Percussion & Dance Ensemble",
    "classification": "Class 1 - Special Interest",
    "typeOfClub": "Performing and Media",
    "accountNumber": "106-AG",
    "acronym": "APDE",
    "inactive": false,
    "timestamp": "2019-10-24 00:17:43"
  },
  {
    "name": "African Students Association",
    "classification": "Class 1 - Special Interest",
    "typeOfClub": "International",
    "accountNumber": "373-AG",
    "acronym": "ASA",
    "inactive": false,
    "timestamp": "2019-10-24 00:17:43"
  },
  {
    "name": "Alden Voices",
    "classification": "Class 1 - Special Interest",
    "typeOfClub": "Performing and Media",
    "accountNumber": "366-AG",
    "acronym": "AV",
    "inactive": false,
    "timestamp": "2019-10-24 00:17:43"
  },
  {
    "name": "Alpha Chi Rho Fraternity",
    "classification": "Class 5 - Greek Life",
    "typeOfClub": "Greek Life",
    "accountNumber": "232-AG",
    "acronym": "AXP",
    "inactive": false,
    "timestamp": "2019-10-24 00:17:43"
  },
  {
    "name": "Alpha Epsilon Delta",
    "classification": "Class 4 - Selective Membership",
    "typeOfClub": "Selective Membership",
    "accountNumber": "108-AG",
    "acronym": "AED",
    "inactive": false,
    "timestamp": "2019-10-24 00:17:43"
  }
]


@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'classification', 'typeOfClub', 'acronym', "inactive"];
  dataSource = CLUBS;

}
