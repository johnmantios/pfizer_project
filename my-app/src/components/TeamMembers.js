import React from "react";
import { List, Typography, Avatar } from "antd";
import team from "../data/teamMembers";

const { Title } = Typography;

const TeamMembers = () => (
  <>
    <b><Title style={{textAlign:"center",fontSize:"30px"}}>Team II Members</Title></b>
    <List
      
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
    <hr style={{height:"2.7mm", visibility:"hidden"}}/>
  </>
);

export default TeamMembers;