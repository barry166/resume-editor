export interface IProps {
  config: any;
}
export default function DefaultTemplate(props: IProps) {
  console.log('props', props)
  return <>default template</>;
}
