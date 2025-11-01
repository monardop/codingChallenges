// You have a combination lock with 4 wheels.
// Each wheel shows a digit from 0 to 9.
// The lock currently shows a code, but you need to change it to
// another code.
// "You can turn each wheel up (+1) or down (-1).
// The wheels are circular: after 9 comes 0, and before 0 is 9.
// You must change the combination with the
// minimum number of moves. If you make one wrong move… you're dead.
// Implement the function changeLock(current, target) with the input:
// current: Current code (4-digit string, e.g., '0022')
// target: Target code (4-digit string, e.g., '0044')
// The expected output is the minimum number of moves needed to
// reach the target combination.
// Rules:
// Each wheel can turn +1 or -1
// Wheels are circular: 9→0 and 0→9
// Each turn counts as 1 move
// The 4 wheels are independent

export function changeLock(current: string, target: string): number {
  const separatedNumbersCurrent = current.split("");
  const separatedNumbersTarget = target.split("");
  let counter = 0;

  for (let i = 0; i < current.length; i++) {
    const currentNumber = Number(separatedNumbersCurrent[i]);
    const targetNumber = Number(separatedNumbersTarget[i]);

    const forward = (targetNumber - currentNumber + 10) % 10;
    const backward = (currentNumber - targetNumber + 10) % 10;

    counter += Math.min(forward, backward);
  }

  return counter;
}
changeLock("9999", "0000");
