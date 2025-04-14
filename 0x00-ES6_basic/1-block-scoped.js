export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;       // Block-scoped version
    const task2 = false;     // Block-scoped version
  }

  return [task, task2];
}
