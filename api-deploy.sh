git checkout main
git pull
bun install
cd apps/api
bun run build
pm2 reload api