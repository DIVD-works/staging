import type { Team } from "$lib/types";

import Victor from "$lib/assets/team/victor.jpg";
import Akiko from "$lib/assets/team/akiko.jpeg";
import Default from "$lib/assets/team/default.jpg";
import Liam from "$lib/assets/team/liam.jpeg";
import Baran from "$lib/assets/team/baran.jpeg";
import Loek from "$lib/assets/team/loek.jpeg";
import Luc from "$lib/assets/team/luc.jpeg";
import Dirk from "$lib/assets/team/dirk.jpeg";
import Nigel from "$lib/assets/team/nigel.png";
import Ahmed from "$lib/assets/team/ahmed.jpg";
import Marcel from "$lib/assets/team/marcel.jpg";
import Michel from "$lib/assets/team/michel.jpg";

const team: Team<string>[] = [
  {
    source: Victor,
    title: "Victor Gevers",
    description: "CEO",
  },
  {
    source: Akiko,
    title: "Akiko Takashima",
    description: "Chief Financial Officer",
  },
  {
    source: Default,
    title: "Jared Hofman",
    description: "SVP, Business Operations",
  },
  {
    source: Liam,
    title: "Liam Plokkaar",
    description: "SVP, Sales",
  },
  {
    source: Baran,
    title: "Baran Canakci",
    description: "Chief Marketing Officer",
  },
  {
    source: Loek,
    title: "Loek Ota",
    description: "SVP, Chief People Office",
  },
  {
    source: Luc,
    title: "Luc van Kessel",
    description: "SVP, Support",
  },
  {
    source: Dirk,
    title: "Dirk Rijntalder",
    description: "SVP, Chief Legal Officer",
  },
  {
    source: Nigel,
    title: "Nigel van Maanen",
    description: "Chief Creative Officer (CCO)",
  },
  {
    source: Ahmed,
    title: "Ahmed Ezzammouri",
    description: "CISO",
  },
  {
    source: Marcel,
    title: "Marcel van der Kuil",
    description: "COO",
  },
  {
    source: Michel,
    title: "Michel Verhagen",
    description: "Chief Public Private Partnerships",
  },
];

export const load = () => {
  return {
    team: team,
  };
};
