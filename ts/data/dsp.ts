import { DspData } from "./dsp.model";

const RECIPE_URL: string = "https://gamma-delta.github.io/center-brain-archive/dsp.json";

export async function getRecipes(): Promise<DspData> {
  // this.getJsonFromUrl(RECIPE_URL, (err, data) => {
  //   if (err !== null) {
  //     console.log("Something went wrong: ", err);
  //   } else {
  //     console.log("Your query count: ", data);
  //   }
  // });

  // return fetch(RECIPE_URL)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  const response: Response = await fetch(RECIPE_URL);
  if (!response.ok) {
    const message: string = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }
  const json: DspData = await response.json();
  return json;
}
