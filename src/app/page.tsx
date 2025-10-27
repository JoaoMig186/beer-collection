"use client";

import React, { useEffect } from "react";

import BeerGrid from "@/components/BeerGrid";
import BeerList from "@/components/BeerList";
import mock from "../mock";

import { useBeerStore, BeerType } from "../index";

export default function Home() {
  const { beers, loadBeers } = useBeerStore();

  useEffect(() => {
    if (beers.length === 0) loadBeers();
    console.log(beers);
  }, [loadBeers, beers.length]);

  return (
    <>
      <BeerList />
      <BeerGrid />
    </>
  );
}
