# pnpm-rebuild-bug-repro

Reproduces a possible pnpm bug

## Steps to Reproduce

Working:

```bash
pnpm i
pnpm run --recursive build
```

Not working

```bash
pnpm i --ignore-scripts
pnpm rebuild
pnpm run --recursive build
```