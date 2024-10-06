import PageLayout from '../../component/layout/layout';
import '../../less/traditional.less';
import { Menu, Row, Col } from 'antd';
import { history, Link } from 'umi';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('教会简史', 'about'),
  getItem('教会会章', 'constitution'),
  getItem('信仰宣言', 'faith'),
  getItem('认识我们', 'knowus'),
  getItem('奉献支持', 'support'),
];
const onClick = (e) => {
  console.log(e);
  history.push('/' + e.key);
};
export default function AboutLayout(props) {
  return (
    <PageLayout curr={props.curr}>
      <img
        src="banner/banner_关于真光.png"
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
            selectedKeys={props.highLight}
            items={items}
          />
        </Col>
        <Col span={18}>{props.content}</Col>
      </Row>
      <div>
        <div style={{ textAlign: 'center', marginTop: '5%' }}>
          <p className="t5">聯絡我們</p>
          <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
            真光浸信會 S.F. True Light Baptist Church
          </Row>
          <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
            地址： 4250 Judah St. San Francisco, CA 94122
          </Row>
          <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
            電話: 415-681-7687
          </Row>
          <Row style={{ justifyContent: 'center', alignContent: 'center' }}>
            網址：info@sftlbc.org
          </Row>
        </div>
        <div>
          <a href="https://goo.gl/maps/4SjXUiTadtCTKtpR6" target="_blank">
            <img
              src="about\地图.png"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '100%',
                marginTop: '30px',
              }}
            />
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
