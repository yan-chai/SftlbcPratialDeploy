import '../../less/traditional.less';
import { Row, Col } from 'antd';
import AboutLayout from './aboutLayout';

export default function About() {
  const content = (
    <>
      <p className="t5">教会简史</p>
      <Row>
        <Col span={10}>
          <img
            src="about\教会简史.png"
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </Col>
        <Col span={13} style={{ marginLeft: '30px' }}>
          <Row>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2001年9月，本會早期一些弟兄姊妹開始於
            1419 22nd Ave., San Francisco 吳鴻恩醫生家聚會。
            吳醫生也是主內的弟兄，十分愛主，願意在傳福音的事工上效勞。
            於是他把樓下的房間讓出，做為敬拜的地方，約有三十幾位弟兄姊妹，同心事奉真神。
          </Row>
          <br />
          <Row>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由於大家熱心愛主，慕道的朋友逐漸增加，聚會的地方已感擁擠，於是尋求更合適的地方，
            求神引導預備。感謝信實的神，垂聽了眾人的祈禱，基石堂浸信會的劉全信牧師，
            竟然主動地免費借用該堂在 Judah St. 夾 48th Ave. 的托兒所聚會。
            2002年4月28日，正式成立教會，定名為〝三藩市真光浸信會〞，加入教會者共計68人，
            邀請退休的牧師穆亨瑞擔任榮譽牧師。
          </Row>
          <br />
          <Row>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2004年8月起，基石堂決定出售原托兒所的房產，再蒙劉牧師及該堂的愛心幫助，
            及會友們的忠心奉獻，真光浸信會以低價﹝較市價﹞購得該處房產
            ﹝聚會的禮堂及相連的住宅﹞。經過整修改建後，乃於2005年10月2日舉行獻堂典禮，
            敬邀唐佑之博士證道，出席會眾及佳賓共306人，看到神的榮光。
          </Row>
          <br />
          <Row>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，本會會友共計86人，主日敬拜平均出席90人。
          </Row>
        </Col>
      </Row>
    </>
  );
  return <AboutLayout highLight={'about'} content={content} />;
}
