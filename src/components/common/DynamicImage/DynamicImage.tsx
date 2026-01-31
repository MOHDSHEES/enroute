import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

type Props = {
  src: string; // e.g., 'photo.jpg'
  alt?: string;
};

const DynamicImage: React.FC<Props> = ({ src, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          name
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const imageNode = data.allFile.nodes.find(
    (node: any) => node.relativePath === src
  );

  if (!imageNode?.childImageSharp) {
    return <div>Image not found: {src}</div>;
  }

  const image = getImage(imageNode.childImageSharp) as IGatsbyImageData;

  return <GatsbyImage image={image} alt={alt || src} />;
};

export default DynamicImage;
