import React from 'react';
import { List, Avatar, Icon } from 'antd';
import styles from './blogList.less';

const listData = [{
  href: 'http//120.24.205.122:8000/',
  title: '嘟嘟和呼呼的一天',
  avatar: 'https://img9.doubanio.com/view/photo/m/w6Wi4EY3egwIGYDn9WM23Q/172354125/x2577101594.jpg',
  description:
    '呼呼从早上就开始对嘟嘟大喊大叫, 态度十分不友好',
  content:
    '现在,嘟嘟却决定带呼呼出去玩',
}];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class BlogList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render(){
        return(
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => { console.log(page); },
                    pageSize: 3,
                }}
                className={styles.layout}
                dataSource={listData}
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                        <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                        <IconText type="message" text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                    <img
                        width={272}
                        alt="logo"
                        src="http://bpic.588ku.com/element_origin_min_pic/16/09/27/0957e9cf6c9b8fc.jpg"
                    />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
                )}
            />
        )
    }
}

export default BlogList;
