import React from "react";

import { storiesOf } from "@storybook/react";

import TextInput from "../components/TextInput/TextInput";

storiesOf("TextInput", module).add("base", () => (
  <TextInput name="job-title" />
));
