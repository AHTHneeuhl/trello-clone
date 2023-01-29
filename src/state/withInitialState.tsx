import { useState, useEffect, ComponentType } from "react";
import { AppState } from "./appStateReducer";
import { load } from "../api";

type InjectedProps = {
  initialState: AppState;
};

type PropsWithInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<TProps>(
  WrappedComponent: ComponentType<PropsWithInjected<TProps> & InjectedProps>
) {
  return (props: PropsWithInjected<TProps>) => {
    const [initialState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: null,
    });

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>();

    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await load();
          setInitialState(data);
        } catch (e) {
          // @ts-ignore
          setError(e);
        }
        setIsLoading(false);
      };
      fetchInitialState();
    }, []);

    if (isLoading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <WrappedComponent {...(props as TProps)} initialState={initialState} />
    );
  };
}
