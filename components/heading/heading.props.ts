export default interface HeadingPropsType<C extends React.ElementType> {
  variant?: C;
  className?: string;
  children: React.ReactNode;
}
