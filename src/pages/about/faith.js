import '../../less/traditional.less';
import { Row, Col } from 'antd';
import { history } from 'umi';
import AboutLayout from './aboutLayout';

const content = (
  <>
    <p className="t5">教會會章</p>
    <Row>
      <Col span={10}>
        <img
          src="about\信仰宣言.png"
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </Col>
      <Col span={12} style={{ marginLeft: '30px' }}>
        <Row>
          我們肯定聖經是神默示的話語。是我們信仰的根據。
          <br />
          本教會贊同一九六三年美南浸信會年會所接納的 <br />
          「浸信會的信仰」。
          <br />
          我們在基督耶穌裡受浸的信徒們，誌願聯合起來成為一體，
          並且每個人都願意把得救的福音分享和傳遍世人。
          <br />
          教會的禮儀，包括信徒的浸禮和主餐。
          <br />
          那光是真光，照亮一切生在世上的人。
          <br />
        </Row>
        <br />
        <Row>(約翰福音1:9)</Row>
        <br />
        <Row style={{ fontWeight: 'bold' }}>
          The true light that gives light to every man was coming into the
          world.
        </Row>
        <Row>(John 1:9)</Row>
      </Col>
    </Row>
  </>
);
export default function Faith() {
  return <AboutLayout highLight={'faith'} content={content} />;
}
