import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Create client
const sanityClient = createClient({
  projectId: "ifjeky6r",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

// Create builder
const builder = imageUrlBuilder(sanityClient);

// Export image url
export const urlFor = (source: string) => builder.image(source);

// Export client
export default sanityClient;
