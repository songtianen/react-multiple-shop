import React from 'react';
import './ListItem.scss';
/**
 * @description 列表单个组件
 * @constructor <ListItem />
 */
class ListItem extends React.PureComponent {
  // 渲染是否是新到标签
  renderBrand = (data) => {
    if (data.brand_type) {
      return <div className='brand brand-type'>brand</div>;
    }
    return <div className='brand brand-new'>new</div>;
  };

  // 渲染星级
  renderScore = (data) => {
    let wm_poi_score = data.wm_poi_score || '';
    let score = `${wm_poi_score}`;
    let scoreArr = score.split('.');
    // 满星个数
    let fullstar = scoreArr[0] * 1;
    // 半星个数
    let halfstar = scoreArr[1] * 1 >= 5 ? 1 : 0;
    // 0 星个数
    let nullstar = 5 - fullstar - halfstar;
    let starjsx = [];
    // 满星jsx
    for (let i = 0; i < fullstar; i++) {
      starjsx.push(<div key={`${i}full`} className='star fullstar' />);
    }
    if (halfstar) {
      for (let i = 0; i < halfstar; i++) {
        starjsx.push(<div key={`${i}half`} className='star halfstar' />);
      }
    }
    if (nullstar) {
      for (let i = 0; i < nullstar; i++) {
        starjsx.push(<div key={`${i}nullstar`} className='star nullstar' />);
      }
    }

    return starjsx;
  };

  renderCount = (data) => {
    let num = data.month_sale_num;
    if (num > 999) {
      return '999+';
    }
    return num;
  };

  // 渲染专送
  renderFlag = (data) => {
    if (data.delivery_type) {
      return <div className='item-flag'>专送</div>;
    }
    return '';
  };

  // 渲染商家活动
  renderOthers = (data) => {
    let array = data.discounts2;
    return array.map((item, index) => {
      return (
        <div key={index} className='other-info'>
          <img className='other-tag' src={item.icon_url} alt='' />
          <div className='other-content'>{item.info}</div>
        </div>
      );
    });
  };

  render() {
    let { itemData } = this.props;
    return (
      <div className='item-content scale-1px'>
        <img className='item-img' src={itemData.pic_url} alt='' />
        {this.renderBrand(itemData)}
        <div className='item-info-content'>
          <p className='item-title'>title</p>
          <div className='item-des clearfix'>
            <div className='item-score'>{this.renderScore(itemData)}</div>
            <div className='item-count'>月售{this.renderCount(itemData)}</div>
            <div className='item-distance'>&nbsp;{itemData.distance}</div>
            <div className='item-time'>{itemData.mt_delivery_time}&nbsp;|</div>
          </div>
          <div className='item-price'>
            <div className='item-pre-price'>{itemData.min_price_tip}</div>
            {this.renderFlag(itemData)}
          </div>
          <div className='item-others'>{this.renderOthers(itemData)}</div>
        </div>
      </div>
    );
  }
}
export default ListItem;
