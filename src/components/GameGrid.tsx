import React, { useEffect, useState } from "react";

import apiClient345 from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  // next: "http://example.com";
  // previous: "http://example.com";
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    apiClient345
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((g) => {
          return <li key={g.id}>{g.name}</li>;
        })}
      </ul>
    </>
  );
};

export default GameGrid;
