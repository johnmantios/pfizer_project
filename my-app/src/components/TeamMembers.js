import React from "react";
import { List, Typography, Avatar } from "antd";
import team from "../data/teamMembers";




const { Title } = Typography;

const TeamMembers = () => (
  <>
    <Title style={{textAlign:"center",fontSize:"30px"}}>Team members</Title>
    <List
      size="large"
      bordered
      dataSource={team}
      renderItem={({ name, image, description }) => (
        <List.Item >
          <List.Item.Meta
            avatar={<Avatar size={60} src={image} />}
            title={name}
            description={description}
          />
        </List.Item>
      )}
    />
  </>
);

export default TeamMembers;