import { Route, Redirect, RouteProps } from "react-router-dom";

interface ProtectedRouteProps extends RouteProps{
  component: React.ComponentType<RouteProps>,
  isLogged: boolean
}

const ProtectedRoute = ({ component: Component,isLogged, ...rest }: ProtectedRouteProps) => {

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
