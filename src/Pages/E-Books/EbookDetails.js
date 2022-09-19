import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../../SharedCompo/Loader/Loader";

const EbookDetails = () => {
  const { id } = useParams();
  console.log(id);
  const url = `https://books-store-server.vercel.app/api/v1/books/ebook/${id}`;
  const { isLoading, data: Books } = useQuery("Products", () =>
    fetch(url)
    .then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }

  return <div>
    <h1>welcome to {id}</h1>
  </div>;
};

export default EbookDetails;
