import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Select from "../components/Select/Select";

storiesOf("Select", module).add("Default", () => <Select />);
