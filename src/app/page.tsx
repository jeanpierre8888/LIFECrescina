import { SliceZone } from "@prismicio/react";

import { HomeDocument } from "~/prismicio-types";
import { components } from "~slices/index";
import { createClient } from "~src/prismicio";

const Page = async () => {
  const client = createClient();

  const home: HomeDocument = await client.getSingle("home");

  const {
    data: { slices },
  } = home;

  return <SliceZone slices={slices} components={components} />;
};

export default Page;
