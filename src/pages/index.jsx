import React, { Children, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { userData } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { ComplastPost } from "../store/UserSlice";
import { useRoutes } from "react-router-dom";

const Home = ({ children }) => {
  const navigate = useNavigate();
  const loggedinUserId = useSelector((state) => state.user.id);
  const [token, setToken] = useState([]);
  const { history } = useRoutes();
  useEffect(() => {
    const tokenn = localStorage.getItem("token");
    if (tokenn) {
      setToken(tokenn);
    }
  }, []);

  useEffect(() => {
    return () => {
      // && history.location.pathname === "any specific path")
      if (history.action === "POP" || history.location.pathname) {
        history.replace(history.location.pathname /* the new state */);
      }
    };
  }, [history]);

  const [isLoading, setIsLoading] = useState(loggedinUserId ? false : true);

  const dispatch = useDispatch();

  let response = null;

  useEffect(() => {
    async function fetchData() {
      response = await dispatch(userData({ token }));

      if (response.payload === "token_not_valid") {
        navigateToLogin();
      }

      const competitors = response.payload.competitors;
      for (const key in competitors) {
        const images = await dispatch(
          ComplastPost({
            token,
            competitorUsername: competitors[key].username,
            response: competitors[key],
          })
        );
      }
      setIsLoading(false);
    }

    if (localStorage.getItem(token)) {
      if (!loggedinUserId) {
        fetchData();
      }
    } else {
      navigateToLogin();
    }
  }, []);
  if (isLoading) {
    return (
      <section>
        <LoadingSpinner />
      </section>
    );
  } else {
    return <>{!!loggedinUserId && children}</>;
  }
};

export default Home;
