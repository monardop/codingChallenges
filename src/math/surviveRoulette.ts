/* 
Art the Clown 🤡 has captured some victims and seated them in a circle 🎪,
 numbered from 0 to N-1, where N is the number of victims.
Art, being a methodical clown in his madness, decides to play a "game". 
He starts at position 0 and counts K victims clockwise (including the current 
person in the count). The victim where the count ends is eliminated 
from the circle.
Then, Art continues counting K positions from the next living person. 
The process repeats until only one person remains.
In his twisted mind, Art wants to know: Who will be the last survivor?
Implement the function surviveRoulette(victims, count) that returns the 
position of the last victim to survive.
The input parameters are:
victims: Total number of victims (seated in positions 0 to n-1)
count: Number to count to eliminate the next victim
*/

export function surviveRoulette(victims: number, count: number): number {
  let survivor = 0;

  // Fórmula de Josephus
  for (let i = 2; i <= victims; i++) {
    survivor = (survivor + count) % i;
  }

  return survivor;
}

surviveRoulette(5, 10);
