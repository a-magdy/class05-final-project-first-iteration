import React from "react";

import { storiesOf } from "@storybook/react";

import Navbar from "../components/navbar/Navbar";

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


storiesOf('Navbar', module).add('text', () => <Navbar />)
.add('frontend developer',() => <Navbar />);
