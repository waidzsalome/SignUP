import React, { Component } from 'react'
import style from  './message.less'
import pic from '../../assets/success.svg'

class success extends Component {

  render () {
    return (
      <div className={style.body}>
        <div className={style.App}>
          <div className={style['App-header']}>
            <img src="http://wdlj.zoomdong.xin/acm.png" className={style['App-logo']} alt='logo' />
          </div>
          <header className={style['App-nav']}>
            <div className={style.title}>第六届图灵杯暨蓝桥杯选拔赛</div>
          </header>
        </div>
        <div className={style.img}><img src={pic} alt="success" /></div>
        <div className={style.content}>恭喜您提交成功！</div>
      </div>

    )
  }

}

export default success
