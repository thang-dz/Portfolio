type Props = {
  data: object;
};

export default function JsonLd({ data }: Props) {
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
