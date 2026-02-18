// // components/ProtectedRoute.tsx
// interface Props {
//   element: React.ReactElement;
// }

// const ProtectedRoute = ({ element }: Props) => {
//   const { isAuthenticated } = useAuth(); // Assume a custom hook

//   if (!isAuthenticated) {
//     return <Navigate replace to="/login" />;
//   }

//   return element;
// };