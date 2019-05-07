import React, {Component} from 'react';
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Content from "../components/utility/Content/Content";
import Layout from "../components/layout/layout";
class Enroll extends React.Component {
constructor(props) {
	super(props);
	this.state = {
	
	}

}

render() {
	const data = this.props.data.allWordpressPage.edges[0].node
				console.log(data)
		return (

			<Layout>
			
			</Layout>
		);
	}
}

export const query = graphql`
query{
  allWordpressPage(filter: {title: {regex: "/Enrollv2/"}}) {
    edges {
      node {
        acf {
          banner {
            hero_text
            cta
            image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
          sign_up_form {
            headding
            description
            first_month_avaible
            first_avaible_start_date
            first_avaible_end_date
            second_month_avaible
            second_avaible_start_date
            second_avaible_end_date
            Third_month_avaible
            third_avaible_start_date
            third_avaible_end_date
            forth_month_avaible
            forth_avaible_start_date
            forth_avaible_end_date
          }
          enrollment_process {
            step_1_title
            step_1_description
            step_2_title
            step_2_description
            step_3_title
            step_3_description
            step_4_title
            step_4_description
            step_5_title
            step_5_description
            step_6_title
            step_6_description
            image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
export default Enroll ;
