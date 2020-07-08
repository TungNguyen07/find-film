import React, { useState } from "react";
import SearchBar from "../components/SearchBarComponent";
import Header from "../components/HeaderComponent";
import Result from "../components/ResultComponent";
import Head from "next/head";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        ></link>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <link
          rel="shortcut icon"
          type="image/png"
          href="images/icon.png"
        ></link>
      </Head>
      <Header />
      <SearchBar setQuery={setQuery} />
      <Result query={query} />
    </div>
  );
};

export default App;
