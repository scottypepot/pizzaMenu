import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
// const time = new Date().toLocaleTimeString();

function Header() {
  return (
    <header className="header">
      <h1>Gitgano 39's Pizza</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openTime = 9;
  const closeTime = 22;
  const isOpen = hour >= openTime && hour <= closeTime;

  console.log(isOpen);

  if (isOpen) {
    return (
      <footer className="footer">
        {new Date().toLocalTimeString()}. We are still Open!
      </footer>
    );
  } else {
    return (
      <footer className="footer">
        {new Date().toLocaleTimeString()}. We are now Close!
      </footer>
    );
  }
}

function Menu() {
  return (
    <main className="menu">
      <h2>Here are our Menu's</h2>
      <Pizza
        name="Pizza Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={6}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={10}
      />
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt="focaccia pizza"></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
