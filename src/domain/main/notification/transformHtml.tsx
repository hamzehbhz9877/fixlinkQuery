import {
  convertNodeToElement,
  Options,
  processNodes,
  Transform,
} from 'react-html-parser';

const transform: Transform = (node, index) => {
  // return null to block certain elements
  // don't allow <span> elements
  if (node.type === 'tag' && node.name === 'span') {
    return null;
  }

  // Transform <ul> into <ol>
  // A node can be modified and passed to the convertNodeToElement function which will continue to render it and it's children
  if (node.type === 'tag' && node.name === 'ul') {
    node.name = 'ol';
    return convertNodeToElement(node, index, transform);
  }

  // return an <i> element for every <b>
  // a key must be included for all elements
  if (node.type === 'tag' && node.name === 'b') {
    return <i key={index}>{processNodes(node.children, transform)}</i>;
  }

  // all links must open in a new window
  if (node.type === 'tag' && node.name === 'a') {
    node.attribs.target = '_blank';
    return convertNodeToElement(node, index, transform);
  }
};

export const options: Options = { decodeEntities: true, transform };
