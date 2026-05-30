import { useState, useCallback } from "react";
import Readme from "./api.js";


const useReadme = () => {
  const [inputText, setInputText] = useState("");
  const [readme, setReadme] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReadme = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await Readme(inputText);
      setReadme(response);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, [inputText]);

  const reset =() => {
    setInputText('');
    setReadme('');
    setError(null);
  };
  
  return { inputText, setInputText, readme, setReadme, loading, setLoading, error, fetchReadme,reset };
};

export default useReadme;