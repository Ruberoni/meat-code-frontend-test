import React from "react";
import * as http from "@/lib/http";
import { NewsletterBody } from "@/types";

const useProducts = () => {
  const [loading, setLoading] = React.useState(false);

  const suscribeNewletter = async (userData: NewsletterBody) => {
    try {
      setLoading(true);
      await http.suscribeNewletter(userData);
    } finally {
      setLoading(false);
    }
  };

  return { loading, suscribeNewletter };
};

export default useProducts;
