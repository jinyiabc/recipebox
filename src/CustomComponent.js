import React from 'react';
import { ListGroup, ListGroupItem} from 'react-bootstrap';



class CustomComponent extends React.Component {

  render() {
    const children = (this.props.children).map(
      (item)=> <ListGroupItem bsStyle="success" key={item.toString()}>{item}</ListGroupItem>
     );
    //console.log(this.props.children);
    return (
      <div>
      <ListGroup>
        {children}
      </ListGroup>

      </div>
    );
  }
};

export default CustomComponent;
