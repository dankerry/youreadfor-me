# screen-starter-project

It's a starter project using some of the modules we use for forms and for details pages. It uses [axios](https://github.com/axios/axios) which you might already know.

The hope is that it gives a smooth launchpad for your projects. Please fork this and follow along. 👇

## Development

```sh
# fork it or clone from here
git clone https://code.youreadfor.me/yrfm-org/screen-starter-project.git
cd screen-starter-project

# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production and launch server
npm run build
npm run start

# generate static project
npm run generate
```

By default it will run the dev server on http://127.0.0.1:10101

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## How to complete a form screen

1. Use [./screens/FormStarter.vue](./screens/FormStarter.vue) as a template
2. Copy [./api/person.js](./api/person.js) for your mock API
3. Get your API data with axios in [./pages/index.vue](./pages/index.vue)
4. Hook up all the form fields
5. Hook up your validation rules https://logaretm.github.io/vee-validate/guide/rules.html#rules
6. Use Bulma form styles https://bulma.io/documentation/form/general/
7. POST the form to your API
8. Test it
9. Send a screenshot or video
10. Push to your git repo

## How to complete a details screen

1. Use [./screens/DetailsStarter.vue](./screens/DetailsStarter.vue) as a template
2. Copy [./api/person.js](./api/person.js) for your mock API
3. Get your API data with axios in [./pages/details.vue](./pages/details.vue)
4. Connect the data on the details page
5. Use Bulma styles https://bulma.io/documentation/
6. Try to make it look like the prototype
7. Test it
8. Send a screenshot or video
9. Push to your git repo

## Third-party libraries

Do not install third-party libraries without asking first.

+ 🚫 no jQuery
+ 🚫 no bootstrap
+ 🚫 no material design

Use what we have in this repository.

+ ✅ use [bulma](https://bulma.io/documentation)
+ ✅ use [lodash](https://lodash.com/docs)
+ ✅ use [nuxt](https://nuxtjs.org/api)
+ ✅ use [vue](https://vuejs.org/v2/api/)

