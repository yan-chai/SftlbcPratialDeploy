import '../../less/traditional.less';
import { Row } from 'antd';
import MinistryLayout from './ministryLayout';

export default function MinistryDetail(props) {
  let res = props.data.filter((obj) => obj.id === props.highLight)[0];
  console.log(res);
  let content = (
    <>
      <p className="t5">{res.name}</p>
      <p>活动时间 :&nbsp;&nbsp;{res.time} </p>
      <p>联 系 人 :&nbsp;&nbsp;{res.host}</p>
      <p>联系方式 :&nbsp;&nbsp;{res.contact}</p>
      <Row style={{ marginTop: '5%', marginBottom: '5%' }}>{res.desc}</Row>
      <Row>
        <img
          src={res.pic}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </Row>
    </>
  );
  return (
    <MinistryLayout
      highLight={props.highLight}
      content={content}
      data={props.data}
    />
  );
}
