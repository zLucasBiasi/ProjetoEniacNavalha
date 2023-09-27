"use client";
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 flex justify-center items-center h-screen">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Seja bem vindo a nossa biblioteca digital!
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#7D7D7D]">
              Temos uma lista atualizada de livros disponíveis. Confira
              regularmente para ver as novidades. Estamos sempre buscando
              melhorias para oferecer a melhor experiência possível na escolha
              dos seus livros favoritos.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/livros"
                className="rounded-md border-2 border-white bg-[#ffe100] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#ffed62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Veja os livros
              </Link>
              <Link
                href="/sobrenos"
                className="text-sm font-semibold leading-6 text-white"
              >
                Sobre nós <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
