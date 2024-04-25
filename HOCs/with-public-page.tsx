import { compose } from "@reduxjs/toolkit";
import { withLayout } from "./with-layout";
import { useIsAuthenticated } from "@/hooks/use-is-authenticated";
import { useHandleRedirect } from "@/hooks/use-handle-redirect";

function withPublicPage<T extends React.Attributes>(
  Component: React.ComponentType<T>
) {
  return (props: T) => {
    const isAuthenticated = useIsAuthenticated();
    const handleRedirect = useHandleRedirect("/user-profile");
    if (isAuthenticated) handleRedirect();

    return <Component {...props} />;
  };
}

export default compose(withPublicPage, withLayout);
