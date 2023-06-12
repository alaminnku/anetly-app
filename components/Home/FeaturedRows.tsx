import { useEffect, useState } from "react";
import FeaturedRow from "./FeaturedRow";
import sanityClient from "../../config/sanity";
import { IRestaurant } from "../../types";

interface IFeaturedCategory {
  _id: string;
  name: string;
  description: string;
  restaurants: IRestaurant[];
}

export default function FeaturedRows() {
  const [featuredCategories, setFeaturedCategories] = useState<
    IFeaturedCategory[]
  >([]);

  // Fetch featured restaurants
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
          _id, 
          name,
          description,
          restaurants[]-> {
          ...,
          category -> {
            name
          },
          dishes[] ->
          }
      }`
      )
      .then((data) => setFeaturedCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {featuredCategories.map((featuredCategory) => (
        <FeaturedRow
          key={featuredCategory._id}
          name={featuredCategory.name}
          description={featuredCategory.description}
          restaurants={featuredCategory.restaurants}
        />
      ))}
    </>
  );
}
