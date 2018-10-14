import React from "react";

import { storiesOf } from "@storybook/react";

import Calendar from "../components/calendar/Calendar";

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


storiesOf('Calendar', module).add('default', () => <Calendar />);
