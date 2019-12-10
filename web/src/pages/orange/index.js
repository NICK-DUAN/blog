import React from 'react';
import {
    Card,
    Table
} from 'antd';

class LoveRecord extends React.Component{
    constructor(props){
        super(props)
        this.tableColumns = [{
            title: '标题',
            key: 'title',
            dataIndex: 'title',
        },{
            title: '土味情话',
            key: 'content',
            dataIndex: 'content',
        },{
            title: '谁说的',
            key: 'talk_user',
            dataIndex: 'talk_user',
        },{
            title: '对谁说',
            key: 'talk_to',
            dataIndex: 'talk_to',
        }]
        this.state = {
            loading: false,
            LoveRecord: [
                {title: "第一句", content: "爱你犹如冬日之阳", talk_user: '嘟嘟', talk_to: "呼呼"},
            ]
        }
    }
    render(){
        return(
            <Card>
                <Table
                    rowKey="title"
                    columns={this.tableColumns}
                    dataSource={this.state.LoveRecord}
                    loading={this.state.loading}
                />
            </Card>
        )
    }
}

export default LoveRecord;