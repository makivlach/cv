export const Bullet: React.FC<{ style?: React.CSSProperties; className?: string }> = ({
  className,
  style,
  ...props
}) => (
  <div
    {...props}
    style={{ ...style }}
    className={'rounded-full bg-gray-600 w-5 h-4 md:w-4 ' + className}
  />
)
