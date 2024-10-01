import { useNavigate, useParams } from "react-router-dom";

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let params = useParams();     // Access route parameters
    let navigate = useNavigate(); // Access navigation functionality
    return <Component {...props} router={{ params, navigate }} />;
  }

  return ComponentWithRouterProp;
}
