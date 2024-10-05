import '../../less/traditional.less';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import MinistryDetail from './ministryDetail';

function Pray(props) {
  if (props.loading.effects['card/getRemote']) {
    return (
      <div>
        <LoadingOutlined />
      </div>
    );
  } else {
    return <MinistryDetail highLight={'pray'} data={props.card[0].data} />;
  }
}

export default connect(({ card, group, loading }) => ({
  card,
  loading,
  group,
}))(Pray);
