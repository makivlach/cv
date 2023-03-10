export const LineHorizontal: React.FC<{ style?: React.CSSProperties; className?: string }> = ({
  className,
  style,
  ...props
}) => (
  <div {...props} style={{ ...style, height: 2 }} className={'w-full bg-gray-600 ' + className} />
)
