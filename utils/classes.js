/*
  classes.js
  Created by Sithija Nelusha on 16/04/2022
*/

export default function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}
