import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x7785609c7A2e308fC793318b81c40FCC8770Ba95", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "CharityDAO Unity Token",
        description: "This NFT represents a symbol of unity and solidarity in the pursuit of decentralized philanthropy through CharityDAO's network.",
        image: readFileSync("scripts/assets/charitydao.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();