import React from "react";

import "../App.css";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Header from "../components/Header";

// Buttons Story
storiesOf("Header", module).add("Navigation", () => <Header />);
