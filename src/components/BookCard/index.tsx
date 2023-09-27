import React from "react";
import Image from "next/image";

const BookCard = ({ book }: any) => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row p-4 gap-4 mt-4">
      <div className="w-full md:w-60 h-60 relative">
        <Image
          src={book.image.url}
          alt={book.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority
        />
      </div>
      <div className="flex-grow flex flex-col justify-between w-full md:max-w-80">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{book.name}</h2>
          <p className="text-[#7D7D7D] mb-4">{book.description}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[#7D7D7D]">{book.text}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
