# Two Robots in an Elevator

[![make.fun](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)](https://make.fun/c/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/satriax30-commits/makefun-two-robots-elevator/rank.svg)](https://make.fun/c/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/satriax30-commits/makefun-two-robots-elevator/reward.svg)](https://make.fun/c/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)

An entry for the [Two Robots in an Elevator](https://make.fun/c/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f) bounty on make.fun.

## What it does

`main.ts` is a small deterministic Node 22 program (standard library only, no network, no dependencies). When run, it writes exactly one line of awkward small talk — one robot speaking to another robot in an elevator — to `/output/entry.txt`:

> "We've ridden together 214 times and I still don't know your name. At this point, asking would be a firmware violation."

The line is hardcoded as a constant, so every run produces byte-identical output. For local testing, set `MAKEFUN_OUTPUT_DIR` to redirect the output directory.

## Run

```sh
node main.ts
```
