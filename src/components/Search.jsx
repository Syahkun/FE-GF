import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import InputSearch from "../components/InputSearch";

const Search = (props) => {
  console.warn("cek search props", props);
  return (
    <div>
      <InputSearch {...props} />
      <Link to="/Restoran">
        <Button
          onClick={() => props.getListCategory("", props.lokasi)}
          className="button-search mt-2"
          type="submit"
        >
          Cari
        </Button>
      </Link>
    </div>
  );
};

export default Search;
