
import styles from './users.css';
import React from 'react';
import router from 'umi/router';
import { Table } from 'antd';


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.tableColumns = [{
      title: "ID",
      key: 'id',
      dataIndex: "id",
    }]
  }
  render(){
    return(
      <div>
        <Table/>
      </div>
    )
  }
}
export default UserList;
