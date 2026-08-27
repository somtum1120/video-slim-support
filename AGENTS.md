# Video Slim support site guidance

- VM101 `/home/codex/homespace/projects/video-slim-support` is the source of truth.
- The Mac copy is the Sites build and deployment copy.
- Keep this site static: no database, login, analytics, cookies, forms, or runtime secrets.
- The support and privacy claims must match the shipping iOS binary.
- Never commit deployment credentials or Apple account information.
- Before release, run `npm test`, `npm run build`, and `npm audit --omit=dev`.
- Public deployment requires explicit user approval and a post-deploy check of `/` and `/privacy`.

