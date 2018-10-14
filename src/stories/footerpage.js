import React from "react";

import { storiesOf } from "@storybook/react";

import Footerpage from "../components/footerpage/Footerpage";

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


storiesOf('Footerpage', module).add('default', () => <Footerpage />);
