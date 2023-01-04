/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useCallback, useRef, useEffect} from 'react';

interface IApi {
  error?: {statusText: string; message: string} | null;
  loading?: boolean;
  response?: any;
}

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

interface IApiArgs {
  path: string | undefined;
  options:
    | {
        method: HttpMethods;
        headers?: {
          'Content-Type'?: string;
        };
        body?: string;
      }
    | undefined;
}

const useApi = (
  {path, options}: IApiArgs = {path: undefined, options: undefined},
  executeOnMount = false,
): [IApi, (apiArgs: IApiArgs) => void] => {
  const baseUrl = 'http://192.168.1.6:3000';
  const initialState: IApi = {
    error: null,
    loading: false,
    response: null,
  };
  const [state, updateState] = useState<IApi>(initialState);
  const [apiArgs, setApiArgs] = useState({path, options});

  const setState = useCallback(
    (newState: Partial<IApi>) =>
      updateState(prevState => ({...prevState, ...newState})),
    [updateState],
  );

  const mountRef: any = useRef(true);

  const callApi = useCallback(async () => {
    try {
      setState({error: null, loading: true});
      const response = await fetch(baseUrl + apiArgs.path, apiArgs.options);

      const data = await response.json();

      if (response.ok) {
        setState({loading: false, response: data});
      } else {
        setState({
          loading: false,
          error: {statusText: response.statusText, message: data},
        });
      }

      return response;
    } catch (e) {
      const typedErr = e as Error;
      throw new Error(typedErr.message);
    }
  }, [apiArgs.path, apiArgs.options]);

  useEffect(
    () => () => {
      mountRef.current = false;
    },
    [],
  );

  useEffect(() => {
    if ((apiArgs.path && apiArgs.options) || executeOnMount) {
      callApi();
    }
  }, [apiArgs.path, apiArgs.options, executeOnMount]);

  const executeApiCall = (args: IApiArgs) => setApiArgs(args);

  return [state, executeApiCall];
};

export default useApi;
