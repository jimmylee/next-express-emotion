# next-express-emotion

My boilerplate for creating a SSR ready web application with a server.

#### Primary dependencies

- [NextJS + Express Server](https://github.com/zeit/next.js/)
- [Emotion CSS-in-JS](https://github.com/emotion-js/emotion)

#### Jimmy, why on earth would I use this?

- You love server side rendering.
- You don't need a database, see [next-postgres](https://github.com/jimmylee/next-postgres) if you do.
- You like my front-end code and want to see my technical choices in one place.
- You need meta tag recommendations for SEO.
- You need something you can extend because you write your own custom components and styles.

#### Okay, why CSS-in-JS?

- We use `css` as a prop so it still feels like [writing Vanilla CSS](https://github.com/jimmylee/next-express-emotion/blob/master/pages/index.js).
- Auto-prefixing support, unless it is a quirk like hiding scrollbars on Firefox.
- O(1) class name lookup like [Tachyons](https://tachyons.io/), except each class gets an unique string generated and you don't have to memorize their names.

**Why not [insert another option]?**

If you are sincere and researched, I am happy to have a conversation. Please file an issue.

## Setup

Make sure NodeJS 10+ is installed. Then run:

```sh
npm install
npm run dev
```

Now view localhost:8080 in your browser.

## Deploy To Production

I use these services for all of my work:

- [Render](https://render.com/i/internet-gift-from-jim)
- [Fleek](https://fleek.co)
- [Vercel](https://vercel.com/)
- [Heroku](https://heroku.com)

Then on the service you can run:

```sh
npm run build
npm run start
```

### Scripts

If you need to run node script without running the server, use this example to get started

```sh
npm run script example
```

## Questions?

Twitter: [@wwwjim](https://twitter.com/wwwjim).
