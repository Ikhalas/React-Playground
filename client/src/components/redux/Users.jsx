import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import { usersFetch, userDelete } from "./actions";

class Users extends Component {
  componentDidMount() {
    this.props.usersFetch();
  }

  deleteUser(id) {
    this.props.userDelete(id);
  }

  render() {
    const { users } = this.props;
    return (
      <>
        {users.map((user, key) => (
          <Card key={key} style={{ marginTop: "10px" }}>
            <CardBody>
              <Row>
                <Col md="6">
                  <img
                    width="100px"
                    height="100px"
                    src={user.avartar}
                    alt="avatar"
                  />
                </Col>
                <Col md="6">
                  <CardTitle>
                    {user.first_name} {user.last_name}
                  </CardTitle>
                  <CardSubtitle>{user.email}</CardSubtitle>
                  <CardText>{user.gender}</CardText>
                  <Button
                    color="danger"
                    size="sm"
                    block
                    onClick={() => this.deleteUser(user.id)}
                  >
                    DELETE
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        ))}
      </>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array
};

function mapStateToProps({ users }) {
  return { users };
}

// --- or ---
// function mapStateToProps(state) {
//   return { users : state.users };
// }

export default connect(mapStateToProps, { usersFetch, userDelete })(Users);
