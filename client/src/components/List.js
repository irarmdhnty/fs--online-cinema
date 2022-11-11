import React from "react";
import { Container, Image } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";

const List = () => {
  const navigate = useNavigate();

  let { data: filmList } = useQuery("filmListCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });

  return (
    <Container>
      <h2 className="text-start mt-5 text-light mb-5">List Film</h2>
      <div className="mb-5 d-flex gap-5">
        {filmList?.map((item) => (
          <Image src={item?.image} key={item?.id} onClick={() => navigate(`/detail/${item.id}`)} width="200" />
        ))}
      </div>
    </Container>
  );
};

export default List;
