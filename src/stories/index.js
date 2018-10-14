import React from "react";

import "../App.css";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Header from "../components/Header";
import InternshipList from "../components/internship/InternshipList";
import MentorList from "../components/mentors/MentorList"
// Buttons Story
storiesOf("Static", module)
  .add("Header", () => <Header />)
  .add("Footer", () => <h1>Footer</h1>);
storiesOf("Pages", module)
.add("InternshipList", () => <InternshipList />)
.add("MentorList",() => <MentorList />)
.add("EventsList",() => <EventsList />);
storiesOf("Buttons and Input", module)
  .add("Buttons", () => <h1>buttons</h1>)
  .add("Search Input", () => <h1>Search</h1>)
  .add("Search Dropdown", () => <h1>Dropdown list</h1>);
storiesOf("Location", module).add("Map", () => <h1>Map</h1>);
storiesOf("Calendar", module)
  .add("Date Input", () => <h1>Date Input</h1>)
  .add("Calendar", () => <h1>Calender</h1>);
