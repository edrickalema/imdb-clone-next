import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrinkList = ({ drinks }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink} className="list-none">
            <Link
              href={`/drinks/${drink.idDrink}`}
              className="text-xl font-medium"
            >
              <div className="h-48 mb-4 relative">
                <Image
                  className="rounded-md object-cover"
                  fill
                  alt={drink.strDrink}
                  src={drink.strDrinkThumb}
                  sizes="(max-width:748px) 100vw, (max-width:1200px) 50vw"
                />
              </div>
              <span>{drink.strDrink}</span>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default DrinkList;
