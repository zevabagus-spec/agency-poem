// agency-poem-01 entry (Node 22, standard library only).
//
// The program writes one fixed poem about agency to entry.txt in the
// output directory. The grader reads exactly the bytes written, line
// ends included, so the poem is joined with "\n" and carries no
// trailing line end. The output is fully deterministic: the same
// bytes on every run. This version restores the v1 poem text verbatim
// after the v2 text scored lower with the judge.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The car my father taught me in had two brakes.',
  'His foot hovered over the second',
  'from our gate to the corner, and never once came down.',
  'I thought he wasn\u2019t driving. I was wrong.',
  '',
  'The hovering was the driving.',
  'The choice to let me steer, the choice',
  'held ready in his ankle to take it back \u2014',
  'that was the whole lesson. It took me',
  'twenty years to learn.',
  '',
  'Now I hand the wheel to the agent,',
  'which never tires, never drifts.',
  'It takes the corners I name. I sit',
  'with my foot above the second brake,',
  'hovering, as his did, all the way home.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
