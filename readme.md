# AthenaEdu

## how to run:

compile client code:

```
cd client
npx tailwindcss build public/styles.css -o public/index.css  // build tailwindcss
npm run build
```

copy files in folder `dist` to `server/public`
then cd to `server` folder and run

```
npm run start
```

## How to deploy:

After running on local, you cant deploy by doing this:

```
git subtree split --branch deploy --prefix server/
```

make a new branch name `deploy`
