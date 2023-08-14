import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Calculator from "./pages/Calculator";
import CalculatorPractice from "./pages/CalculatorPractice";
import Card from "./pages/Card";
import Form from "./pages/Form";
import Home from "./pages/Home";
import JSON from "./pages/JSON";
import JsonJsx from "./pages/JsonJsx";
import MainTasks from "./pages/MainTasks";
import ProductCard from "./pages/ProductCard";
import Products from "./pages/Products";
import Props from "./pages/Props";
import State from "./pages/State";
import Tasks from "./pages/Tasks";
import TrackZone from "./pages/TrackZone";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/todo" element={<MainTasks />} />
          <Route path="/card" element={<ProductCard />} />
          <Route path="/json" element={<JSON />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/products" element={<Products />} />
          <Route path="/task-card" element={<Card />} />
          <Route path="/json-jsx" element={<JsonJsx />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="cal-practice" element={<CalculatorPractice />} />
          <Route path="track-zone" element={<TrackZone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/**
 * When should we decide creating a new component?
 * **** When we need to write duplicate code
 * **** Which data are different
 */

// When you see any duplicate structure just make it a component

/**
 * Designing Component
 * - Props
 * - Component Tree
 * -
 */
