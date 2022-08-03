import { RichChunkModel } from "../../models/rich-chunk/RichChunkModel";
import { headerHeight } from "../../../components/Header";

export function getDataProject1(): RichChunkModel[] {
  return [
    {
      nameId: "asdf",
      minHeight: `calc(100vh - ${headerHeight}px)`,
      backgroundImage:
        "https://giphy.com/gifs/background-visuals-particles-UNHplVba2fweBfkLHv",
      textsTop: [
        {
          align: "center",
          size: "4em",
          text: `
**<span style="color: red; ">X</span><span style="font-size: .92em;">|</span>Phone**
`,
        },
      ],
    },
  ] as RichChunkModel[];
}
