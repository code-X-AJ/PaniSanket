import React from 'react';
import { Descriptions } from 'antd';


const App = (props) => {
    const items = [
      {
        label: 'Issue',
        children: props.issue,
      },
      {
        label: 'Details',
        children: props.details,
      },
      {
        label: 'Location',
        children: props.area,
      },
    ];
  return (
    <Descriptions title="Report details" bordered size="medium" column={1}>
      {items.map(item => (
        <Descriptions.Item key={item.label} label={item.label} span={1}>
          {item.children}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

export default App;
