import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Poster from "./index";
import markdown from "./README.md";

const stories = storiesOf("Poster", module);

stories.addDecorator(withKnobs);
stories.add(
  "Basic poster",
  () => (
    <Poster
      src={text(
        "url",
        "https://cdn.collider.com/wp-content/uploads/2019/03/avengers-endgame-poster-768x1137.jpg",
      )}
    />
  ),
  {
    notes: { markdown },
  },
);
