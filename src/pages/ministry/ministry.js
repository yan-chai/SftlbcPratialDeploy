import '../../less/traditional.less';
import { LoadingOutlined } from '@ant-design/icons';
import HCard from '../../component/card/hcard';
import { connect } from 'umi';
import MinistryLayout from './ministryLayout';

function Ministry(props) {
  if (props.loading.effects['card/getRemote']) {
    return (
      <div>
        <LoadingOutlined />
      </div>
    );
  } else {
    let content = props.card[0].data.map((obj, i) => {
      return (
        <HCard
          title={obj.name}
          pic={obj.pic}
          time={obj.time}
          person={obj.host}
          contact={obj.contact}
          desc={obj.shortDesc}
        />
      );
    });
    return (
      <MinistryLayout
        highLight="ministry"
        content={content}
        data={props.card[0].data}
      />
    );
  }
}

export default connect(({ card, loading }) => ({
  card,
  loading,
}))(Ministry);
