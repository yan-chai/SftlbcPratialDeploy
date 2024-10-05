import '../../less/traditional.less';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import MinistryDetail from './ministryDetail';

function EnglishBibleStudy(props) {
  if (props.loading.effects['card/getRemote']) {
    return (
      <div>
        <LoadingOutlined />
      </div>
    );
  } else {
    return (
      <MinistryDetail
        highLight={'englishBibleGroup'}
        data={props.card[0].data}
      />
    );
  }
}

export default connect(({ card, loading }) => ({
  card,
  loading,
}))(EnglishBibleStudy);
