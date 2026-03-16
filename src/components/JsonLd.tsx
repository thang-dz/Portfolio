type Props = {
	data: object;
};

export default function JsonLd({ data }: Props) {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be embedded as raw JSON.
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
