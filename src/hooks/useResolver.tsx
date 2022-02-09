import { useState, useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from "yup";
import Lazy from "yup/lib/Lazy";

const useResolver = (schema: AnyObjectSchema | Lazy<any, unknown>) => {
  const [shouldValidate, setShouldValidate] = useState(true);

  const validateHandler = (state: boolean) => {
    if (shouldValidate !== state) {
      setShouldValidate(state);
    }
  };

  const resolver = useMemo(() => {
    return shouldValidate ? yupResolver(schema) : undefined;
  }, [shouldValidate, schema]);

  return { resolver, validateHandler };
};

export default useResolver;
