import './src/styles/module.css'
export const ItemWrap = ({ children }: { children: string }) => {
  return (
    <span className="item-wrap">{children}</span>
  )
}
