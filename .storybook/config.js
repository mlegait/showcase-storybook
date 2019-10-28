import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure } from "@storybook/react";
import React from "react";
import Container from "./Container";

addDecorator(story => <Container story={story} />);

addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
