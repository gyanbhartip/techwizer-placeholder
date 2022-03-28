import { useState, useCallback } from "react";
import jsonp from "jsonp";

export const Status = {
  idle: "IDLE",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

function toQueryString(params) {
  return Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
}

export const useMcSubscribe = (url) => {
  const [status, setStatus] = useState(Status.idle);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);

  const subscribe = useCallback((data) => {
    const params = toQueryString(data);
    const newUrl = url + "&" + params;

    setError(null);
    setStatus(Status.loading);

    jsonp(newUrl, { param: "c" }, (err, data) => {
      if (err) {
        setStatus(Status.error);
        setError(err);
      } else if (data.result !== "success") {
        setStatus(Status.error);
        setError(data.msg);
      } else {
        setStatus(Status.success);
        setValue(data.msg);
      }
    });
  }, []);

  return { subscribe, status, error, value };
};
