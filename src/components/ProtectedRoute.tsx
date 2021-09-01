import { RootStateOrAny, useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface ProtectedRouteProps extends RouteProps{
  component: React.ComponentType<RouteProps>,
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => {
  const isLogged = useSelector((state:RootStateOrAny) => state.authReducer.isLogged)
  return (
    <Route
      {...rest}
      render={(props) => { 
          if(isLogged){
            return <Component {...rest} {...props} />;
          }
          else{
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
          
        }
      }
      
    />
  );
};

export default ProtectedRoute;
