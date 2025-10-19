#!/bin/bash
cd xyz-portfolio
npm run build
cp -r dist/* ../
cd ..
git add .
