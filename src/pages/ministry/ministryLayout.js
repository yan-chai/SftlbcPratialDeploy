import PageLayout from '../../component/layout/layout';
import '../../less/traditional.less';
import { Menu, Layout, Row, Col } from 'antd';
import { connect, history } from 'umi';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export default function MinistryLayout(props) {
  let items = [];
  items.push(getItem('总览', 'ministry'));
  props.data.forEach((obj) => {
    items = [...items, getItem(obj.name, obj.id)];
  });
  return (
    <PageLayout curr={'ministry'}>
      <img
        src="ministry/ministry.png"
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
      <Row style={{ marginTop: '5%' }}>
        <Col span={6}>
          <Menu
            onClick={(e) => history.push(e.key)}
            style={{
              width: '80%',
            }}
            mode="inline"
            selectedKeys={props.highLight}
            items={items}
          />
        </Col>
        <Col span={18}>{props.content}</Col>
      </Row>
    </PageLayout>
  );
}
