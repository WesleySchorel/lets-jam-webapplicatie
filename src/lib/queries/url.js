export default function getQueryUrl(gql, slug) {
	return gql`
		query Url {
			url(where: { slug: "${slug}" }) {
				id
				url
				slug
				updatedAt
				website {
					slug
				}
				checks {
					succescriteria {
						id
					}
				}
			}
		}
	`;
}
