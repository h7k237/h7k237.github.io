#!/bin/bash
cd xyz-portfolio
npm run build
cp -r dist/* ../
cd ..
git add .
git commit -m "Deploy $(date)"
git push origin main
