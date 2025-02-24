Write-Host "Cleaning up old installation..."
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

Write-Host "Installing dependencies..."
npm install --legacy-peer-deps

Write-Host "Starting the application..."
npm start
