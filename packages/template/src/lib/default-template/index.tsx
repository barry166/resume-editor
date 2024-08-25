export interface IProps {
  config: any;
}
export default function DefaultTemplate(props: IProps) {
  console.log('props', props)
  return <div className=" px-2">default template233</div>;
}
