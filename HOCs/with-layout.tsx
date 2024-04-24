import { Layout } from "@/ui/common/layout";

export function withLayout<T extends React.Attributes>(
  Component: React.ComponentType<T>
) {
  return (props: T) => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
}
