"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import BookCard from "../../components/BookCard";
import { GET_BOOKS } from "@/services/queries";

const Books = () => {
  const { error, data } = useQuery(GET_BOOKS);

  if (error) return <p>Erro ao carregar os dados</p>;

  return (
    <div className="container mx-auto p-3">
      <h1 className="text-3xl font-semibold mt-20 lg:mt-32 p-4">
        Lista de Livros
      </h1>
      <div>
        {data?.booksApi?.map((book: any, index: any) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
