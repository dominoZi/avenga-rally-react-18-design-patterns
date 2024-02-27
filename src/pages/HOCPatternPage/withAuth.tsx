export function withAuth<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  const ComponentWithAuth = (props: T) => {
    const authorize = true;
    return authorize ? (
      <WrappedComponent {...props} />
    ) : (
      <div>No authorized</div>
    );
  };

  return ComponentWithAuth;
}
