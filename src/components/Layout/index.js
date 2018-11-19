/**
 * Created by out_xu on 17/7/13.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import style from './index.less'

const LayoutContent = (props) => {
  return (
    <div className={style.App}>
      <div className={style['App-header']}>
        <img src="http://wdlj.zoomdong.xin/acm.png" className={style['App-logo']} alt='logo' />
      </div>

      <header className={style['App-nav']}>
        <div className={style.title}>第六届图灵杯暨蓝桥杯选拔赛</div>
        <br/>
        <Button htmlType='button'><Link to='/home'> 现场赛 </Link></Button>
        <span>&nbsp;&nbsp;</span>
        <Button htmlType='button'><Link to='/net'> 网络赛 </Link></Button>
      </header>
      <div className={style['App-content']}>
        {props.children}
      </div>
    </div>
  )
}

export default LayoutContent
