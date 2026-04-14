// implement custom hook to cancel and execute async function on demand and also support retry
import { useState, useRef, useCallback } from "react";

export function useAsync(fn) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const abortControllerRef = useRef(null);
  const lastArgsRef = useRef(null);
  const callIdRef = useRef(0);

  const execute = useCallback(async (...args) => {
    const callId = ++callIdRef.current;

    // cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    lastArgsRef.current = args;

    setLoading(true);
    setError(null);

    try {
      const result = await fn(...args, controller.signal);

      // prevent race condition
      if (callId !== callIdRef.current) return;

      setData(result);
      return result;
    } catch (err) {
      if (err.name === "AbortError") return;

      setError(err);
    } finally {
      if (callId === callIdRef.current) {
        setLoading(false);
      }
    }
  }, [fn]);

  const cancel = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setLoading(false);
  }, []);

  const retry = useCallback(() => {
    if (lastArgsRef.current) {
      execute(...lastArgsRef.current);
    }
  }, [execute]);

  return {
    data,
    error,
    loading,
    execute,
    cancel,
    retry,
  };
}

// for multiple retries
import { useState, useRef, useCallback } from "react";

export function useAsync(fn, options = {}) {
  const {
    retries = 0,
    retryDelay = 500, // ms
  } = options;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const abortControllerRef = useRef(null);
  const lastArgsRef = useRef(null);
  const callIdRef = useRef(0);

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const execute = useCallback(async (...args) => {
    const callId = ++callIdRef.current;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    lastArgsRef.current = args;

    setLoading(true);
    setError(null);

    let attempt = 0;

    while (attempt <= retries) {
      try {
        const result = await fn(...args, controller.signal);

        if (callId !== callIdRef.current) return;

        setData(result);
        setLoading(false);
        return result;
      } catch (err) {
        if (err.name === "AbortError") return;

        if (attempt === retries) {
          setError(err);
          setLoading(false);
          return;
        }

        // retry with delay (can extend to exponential)
        await sleep(retryDelay * (attempt + 1));
        attempt++;
      }
    }
  }, [fn, retries, retryDelay]);

  const cancel = useCallback(() => {
    abortControllerRef.current?.abort();
    setLoading(false);
  }, []);

  const retry = useCallback(() => {
    if (lastArgsRef.current) {
      execute(...lastArgsRef.current);
    }
  }, [execute]);

  return {
    data,
    error,
    loading,
    execute,
    cancel,
    retry,
  };
}


// how to use the custom hook
const fetchUser = async (id, signal) => {
  const res = await fetch(`/api/user/${id}`, { signal });
  return res.json();
};

const {
  data,
  loading,
  error,
  execute,
  cancel,
  retry,
} = useAsync(fetchUser);

// trigger manually
execute(1);

// cancel
cancel();

// retry last call
retry();
