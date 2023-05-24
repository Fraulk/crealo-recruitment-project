# Build a react webapp with routing, a redux store and a simple page to show a list of books

## Run

You can run the project using

```sh
npm i
npm run dev
```

## Steps

### 1. First, we'll need a router to create a new page
   
> | *i* |: You can use `react-router-dom` (the npm package is already added)  

We'd like to add the `<Books />` page to the router

---

### 2. In the new `<Books />` page, we want to show a list of books

> | *i* |: There is already some code there, all you have to do is to list the book

---

### 3. Now, we need to see more info about one book in particular, so we need to fetch data about the book and store them in a Redux store

> | *i* |: You can use the `<BookDetails />` component

The idea here is to create a new function in the existing store that will fetch the API using the store and manipulate the data to show it on the page

4. Bonus: write a typescript interface in `bookStore.ts` for `books`