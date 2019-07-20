import React from "react";
import Column from "./Column";
import styled from "styled-components";

const UserBadgeWrapper = styled.div`
  background: white;
  padding: 10px;
  width: 40%;
  border: 1px solid black;
  font-size: 20px;
  font-weight: 600;
`;

function UserBadge(props) {
  const user = props.user;
  return <UserBadgeWrapper>{user.name}</UserBadgeWrapper>;
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  font-size: 22px;
`;

const ColumnHeader = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 600;
  background: white;
  border: 1px solid black;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  font-size: 18px;
  background: white;
`;

class Row extends React.Component {
  render() {
    const row = this.props.row;
    return (
      <React.Fragment>
        {this.props.titled ? (
          <HeaderWrapper>
            <UserBadgeWrapper>
              <span>Name</span>
            </UserBadgeWrapper>
            {row.columnsOrder.map((columnId, key) => {
              return (
                <ColumnHeader key={key}>
                  <span>{row.columns[columnId].title}</span>
                </ColumnHeader>
              );
            })}
          </HeaderWrapper>
        ) : (
          ""
        )}
        <RowWrapper>
          <UserBadge user={row.user} />
          {row.columnsOrder.map((columnId, index) => {
            return (
              <Column
                store={this.props.store}
                titled={this.props.titled}
                key={columnId}
                column={row.columns[columnId]}
              />
            );
          })}
        </RowWrapper>
      </React.Fragment>
    );
  }
}

export default Row;
