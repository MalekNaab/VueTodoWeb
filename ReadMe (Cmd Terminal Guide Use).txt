Installation Guide:
C:\Users\malek\Desktop\Portfolio\TodoWeb>npm init -y
Wrote to C:\Users\malek\Desktop\Portfolio\TodoWeb\package.json:

{
  "name": "todoweb",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

C:\Users\malek\Desktop\Portfolio\TodoWeb>npm install express --save

added 64 packages, and audited 65 packages in 3s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\malek\Desktop\Portfolio\TodoWeb>npm install cors

added 2 packages, and audited 67 packages in 1s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\malek\Desktop\Portfolio\TodoWeb>npm install mongodb@4.1.0 --save

up to date, audited 86 packages in 958ms

15 packages are looking for funding
  run `npm fund` for details

1 moderate severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

C:\Users\malek\Desktop\Portfolio\TodoWeb>npm install multer --save

added 18 packages, and audited 104 packages in 3s

16 packages are looking for funding
  run `npm fund` for details

1 moderate severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

To Run it:
C:\Users\malek\Desktop\Portfolio\TodoWeb>node server.js
Mongo DB connection successful