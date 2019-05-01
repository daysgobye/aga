const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/product.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  return graphql(`
    {
    allWordpressAcfProduct{
   	 edges{
      node{
        wordpress_id
      }
    }
  }
	}
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create product pages.
    result.data.allWordpressAcfProduct.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/store/${edge.node.wordpress_id}`,
        component: productTemplate,
        context: {
								slug: edge.node.wordpress_id
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}
