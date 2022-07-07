import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  });

  return <div></div>;
};

export default Favorites;
