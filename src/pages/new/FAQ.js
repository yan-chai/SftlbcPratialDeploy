import PageLayout from '../../component/layout/layout';
import '../../less/traditional.less';
import {
  LoadingOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { Menu, Layout, Row, Col, Button } from 'antd';
import { history } from 'umi';
import QAitem from '../../component/QAitem/QAitem';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [getItem('欢迎来到真光', 'new'), getItem('Q&A', 'FAQ')];
const onClick = (e) => {
  console.log(e);
  history.push(e.key);
};
export default function FAQ() {
  return (
    <PageLayout curr={'new'}>
      <img
        src="/new.png"
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
            onClick={onClick}
            style={{
              width: '80%',
            }}
            mode="inline"
            selectedKeys={'FAQ'}
            items={items}
          />
        </Col>
        <Col span={18}>
          <p className="t5">Q&A</p>
          <p>
            内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
            内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
            内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
            内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
            内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
            内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
            内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
            内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容
          </p>
          <QAitem
            question="Q1: 为什么真光浸信会不是真光教会"
            answer="内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容"
          />
          <QAitem
            question="Q2: 执事是什么？"
            answer="内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容"
          />
          <QAitem
            question="Q3: 什么是事工？"
            answer="内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容"
          />
          <QAitem
            question="Q4: 什么是同工？"
            answer="内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容"
          />
          <QAitem
            question="Q5: 什么是团契？"
            answer="内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容"
          />
          <QAitem
            question="Q6: 主日代表什么？为什么要证道？如何证道？"
            answer="内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容"
          />
          <QAitem
            question="Q7: 基督教为什么会有灵修？如何灵修？"
            answer="内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容"
          />
        </Col>
      </Row>
    </PageLayout>
  );
}
