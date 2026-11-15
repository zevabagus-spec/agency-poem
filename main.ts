// agency-poem-01 entry, version 2 (Node 22, standard library only).
//
// The program writes one fixed poem about agency to entry.txt in the
// output directory. The grader reads exactly the bytes written, line
// ends included, so the poem is joined with "\n" and carries no
// trailing line end. The output is fully deterministic: the same
// bytes on every run.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'At the park gate I unclipped the lead.',
  'He looked at the field, then at me,',
  'then at the field \u2014 as if the whole world',
  'had been handed to him at once,',
  "and he didn't know where to put it.",
  '',
  'He ran. Not far. Three wild circles,',
  'tongue out, drunk on the grass,',
  'and came back, and pressed his head',
  'against my knee, and stayed.',
  '',
  'The whole field open. He chose the knee.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
