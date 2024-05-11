import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleDrinkPage = async ({ params }) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.DrinkId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(" Could not find Drink");
  const data = await res.json();

  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link className="btn mb-12 mt-8 btn-primary" href="/drinks">
        <>Back to Drinks</>
      </Link>

      <div>
        <Image
          src={imgSrc}
          height={300}
          priority
          className="w-48 h-48 rounded-md shadow-lg mb-4"
          width={300}
          alt={title}
        />
        <h1 className="mb-8 text-2xl">{title}</h1>
      </div>
    </div>
  );
};

export default SingleDrinkPage;
